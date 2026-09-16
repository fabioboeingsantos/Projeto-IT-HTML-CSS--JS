from __future__ import annotations

import json
import threading
from pathlib import Path
from typing import Literal

from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field


BASE_DIR = Path(__file__).resolve().parent
DATA_FILE = BASE_DIR / "data" / "vagas.json"
DATA_FILE.parent.mkdir(parents=True, exist_ok=True)

DEFAULT_STATE = {
    "id": 1,
    "nome": "Estacionamento do Evento",
    "vagasLivres": 50,
    "totalVagas": 50,
    "vagasOcupadas": 0,
    "ultimaAcao": "Nenhuma ação registrada neste turno",
    "historico": [],
}

state_lock = threading.Lock()


class ParkingState(BaseModel):
    id: int
    nome: str
    vagasLivres: int = Field(ge=0)
    totalVagas: int = Field(gt=0)
    vagasOcupadas: int = Field(ge=0)
    ultimaAcao: str


class ActionResponse(BaseModel):
    mensagem: str
    estacionamento: ParkingState


def _load_state() -> dict:
    if not DATA_FILE.exists():
        _save_state(DEFAULT_STATE.copy())

    with DATA_FILE.open("r", encoding="utf-8") as file:
        state = json.load(file)

    state.setdefault("historico", [])
    state.setdefault("ultimaAcao", "Nenhuma ação registrada neste turno")
    state["vagasOcupadas"] = state["totalVagas"] - state["vagasLivres"]
    return state


def _save_state(state: dict) -> None:
    temporary_file = DATA_FILE.with_suffix(".tmp")
    with temporary_file.open("w", encoding="utf-8") as file:
        json.dump(state, file, ensure_ascii=False, indent=2)
        file.write("\n")
    temporary_file.replace(DATA_FILE)


def _public_state(state: dict) -> ParkingState:
    return ParkingState.model_validate(state)


app = FastAPI(title="Estacionamento do Evento API", version="1.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:8080",
        "http://127.0.0.1:8080",
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "http://localhost:5500",
        "http://127.0.0.1:5500",
    ],
    allow_credentials=False,
    allow_methods=["GET", "POST"],
    allow_headers=["*"],
)


@app.get("/health")
@app.get("/api/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/api/parking", response_model=ParkingState)
def get_parking() -> ParkingState:
    with state_lock:
        return _public_state(_load_state())


@app.post("/api/parking/{action}", response_model=ActionResponse)
def register_action(action: Literal["entry", "exit", "undo"]) -> ActionResponse:
    with state_lock:
        state = _load_state()
        history = state["historico"]

        if action == "entry":
            if state["vagasLivres"] <= 0:
                raise HTTPException(status_code=409, detail="Estacionamento lotado")
            state["vagasLivres"] -= 1
            history.append("entry")
            message = "Entrada confirmada"
            state["ultimaAcao"] = "Última entrada registrada agora"

        elif action == "exit":
            if state["vagasLivres"] >= state["totalVagas"]:
                raise HTTPException(status_code=409, detail="Nenhum veículo para registrar saída")
            state["vagasLivres"] += 1
            history.append("exit")
            message = "Saída registrada"
            state["ultimaAcao"] = "Última saída registrada agora"

        else:
            if not history:
                raise HTTPException(status_code=409, detail="Nenhuma ação para desfazer")
            last_action = history.pop()
            if last_action == "entry":
                state["vagasLivres"] = min(state["totalVagas"], state["vagasLivres"] + 1)
                message = "Entrada desfeita"
                state["ultimaAcao"] = "Última entrada desfeita agora"
            else:
                state["vagasLivres"] = max(0, state["vagasLivres"] - 1)
                message = "Saída desfeita"
                state["ultimaAcao"] = "Última saída desfeita agora"

        state["vagasOcupadas"] = state["totalVagas"] - state["vagasLivres"]
        _save_state(state)
        return ActionResponse(mensagem=message, estacionamento=_public_state(state))
