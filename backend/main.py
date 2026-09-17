from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routers.actions import router as actions_router
from routers.parking import router as parking_router


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


app.include_router(parking_router, prefix="/api")
app.include_router(actions_router, prefix="/api")
