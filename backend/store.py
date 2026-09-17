from threading import Lock

from fastapi import HTTPException


PARKINGS = {
    1: {
        "id": 1,
        "nome": "Estacionamento do Evento",
        "vagasLivres": 50,
        "totalVagas": 50,
        "vagasOcupadas": 0,
        "ultimaAcao": "Nenhuma ação registrada neste turno",
        "historico": [],
    }
}

state_lock = Lock()


def public_state(state: dict) -> dict:
    return {key: value for key, value in state.items() if key != "historico"}


def require_parking(parking_id: int) -> dict:
    parking = PARKINGS.get(parking_id)
    if parking is None:
        raise HTTPException(status_code=404, detail="Estacionamento não encontrado")
    return parking
