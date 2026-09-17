from fastapi import APIRouter

from models import ParkingState
from store import public_state, require_parking, state_lock


router = APIRouter(prefix="/parking", tags=["Estacionamentos"])


@router.get("", response_model=ParkingState, summary="Consultar o estacionamento principal")
def get_current_parking() -> ParkingState:
    with state_lock:
        return ParkingState.model_validate(public_state(require_parking(1)))


@router.get("/{parking_id}", response_model=ParkingState, summary="Consultar um estacionamento por ID")
def get_parking(parking_id: int) -> ParkingState:
    with state_lock:
        return ParkingState.model_validate(public_state(require_parking(parking_id)))
