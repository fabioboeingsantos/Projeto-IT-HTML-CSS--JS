from pydantic import BaseModel, Field


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
