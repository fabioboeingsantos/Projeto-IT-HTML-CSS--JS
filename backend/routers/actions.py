from fastapi import APIRouter, HTTPException

from models import ActionResponse, ParkingState
from store import public_state, require_parking, state_lock


router = APIRouter(prefix="/parking/{parking_id}", tags=["Ações do estacionamento"])


def _response(state: dict, message: str) -> ActionResponse:
    return ActionResponse(
        mensagem=message,
        estacionamento=ParkingState.model_validate(public_state(state)),
    )


@router.post("/entries", response_model=ActionResponse, summary="Registrar entrada")
def register_entry(parking_id: int) -> ActionResponse:
    with state_lock:
        state = require_parking(parking_id)
        if state["vagasLivres"] <= 0:
            raise HTTPException(status_code=409, detail="Estacionamento lotado")
        state["vagasLivres"] -= 1
        state["vagasOcupadas"] = state["totalVagas"] - state["vagasLivres"]
        state["historico"].append("entry")
        state["ultimaAcao"] = "Última entrada registrada agora"
        return _response(state, "Entrada confirmada")


@router.post("/exits", response_model=ActionResponse, summary="Registrar saída")
def register_exit(parking_id: int) -> ActionResponse:
    with state_lock:
        state = require_parking(parking_id)
        if state["vagasLivres"] >= state["totalVagas"]:
            raise HTTPException(status_code=409, detail="Nenhum veículo para registrar saída")
        state["vagasLivres"] += 1
        state["vagasOcupadas"] = state["totalVagas"] - state["vagasLivres"]
        state["historico"].append("exit")
        state["ultimaAcao"] = "Última saída registrada agora"
        return _response(state, "Saída registrada")


@router.post("/undo", response_model=ActionResponse, summary="Desfazer a última ação")
def undo_last_action(parking_id: int) -> ActionResponse:
    with state_lock:
        state = require_parking(parking_id)
        if not state["historico"]:
            raise HTTPException(status_code=409, detail="Nenhuma ação para desfazer")

        last_action = state["historico"].pop()
        if last_action == "entry":
            state["vagasLivres"] = min(state["totalVagas"], state["vagasLivres"] + 1)
            state["ultimaAcao"] = "Última entrada desfeita agora"
            message = "Entrada desfeita"
        else:
            state["vagasLivres"] = max(0, state["vagasLivres"] - 1)
            state["ultimaAcao"] = "Última saída desfeita agora"
            message = "Saída desfeita"

        state["vagasOcupadas"] = state["totalVagas"] - state["vagasLivres"]
        return _response(state, message)
