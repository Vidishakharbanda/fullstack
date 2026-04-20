# from fastapi import FastAPI

# app = FastAPI(title="Food Service API")

# @app.get("/")
# def home():
#     return {"message": "FastAPI running inside Docker 🚀"}

# @app.get("/items")
# def items():
#     return [
#         {"id": 1, "name": "Pizza"},
#         {"id": 2, "name": "Burger"}
#     ]


from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
import time

app = FastAPI(title="Food Service API")

# ✅ CORS for Vite (localhost:5173)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173",
        "https://vidisha-frontend.azurewebsites.net"
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ✅ Logging Middleware
@app.middleware("http")
async def log_requests(request: Request, call_next):
    start_time = time.time()
    response = await call_next(request)
    process_time = time.time() - start_time

    print(
        f"{request.method} {request.url.path} "
        f"- {response.status_code} "
        f"- {process_time:.4f}s"
    )

    return response


# ✅ Routes
@app.get("/")
def home():
    return {"message": "FastAPI running inside Docker 🚀"}

@app.get("/items")
def items():
    return [
        {"id": 1, "name": "Pizza"},
        {"id": 2, "name": "Burger"}
    ]