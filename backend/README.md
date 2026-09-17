# Backend

API FastAPI do Estacionamento do Evento.

## Executar

No PowerShell, a partir desta pasta:

```powershell
.\venv\Scripts\Activate.ps1
python -m uvicorn main:app --reload --port 8000
```

Documentação interativa: http://127.0.0.1:8000/docs

Rotas principais:

- `GET /api/parking/1` — consulta o estacionamento pelo ID; IDs inexistentes retornam `404`.
- `POST /api/parking/1/entries` — registra entrada.
- `POST /api/parking/1/exits` — registra saída.
- `POST /api/parking/1/undo` — desfaz a última ação.

Os dados são fixos em memória e retornam ao estado inicial quando o servidor é reiniciado.

O frontend React roda separadamente com Vite, a partir de `frontend/`:

```powershell
cd ..\frontend
npm.cmd install
npm.cmd run dev
```

Frontend: http://127.0.0.1:5173/
