# Backend

API FastAPI do Estacionamento do Evento.

## Executar

No PowerShell, a partir desta pasta:

```powershell
.\venv\Scripts\Activate.ps1
uvicorn main:app --reload --port 8000
```

Documentação interativa: http://127.0.0.1:8000/docs

O frontend React roda separadamente com Vite, a partir de `frontend/`:

```powershell
cd ..\frontend
npm.cmd install
npm.cmd run dev
```

Frontend: http://127.0.0.1:5173/
