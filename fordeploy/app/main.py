from fastapi import FastAPI

app = FastAPI(title="Food Service API")

@app.get("/")
def home():
    return {"message": "FastAPI running inside Docker 🚀"}

@app.get("/items")
def items():
    return [
        {"id": 1, "name": "Pizza"},
        {"id": 2, "name": "Burger"}
    ]