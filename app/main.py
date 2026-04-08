from fastapi import FastAPI

from app.utils import add, multiply

app = FastAPI()


@app.get("/health")
def health() -> dict[str, str]:
    return {"status": "ok"}


@app.get("/add")
def add_endpoint(a: int, b: int) -> dict[str, int]:
    return {"result": add(a, b)}


@app.get("/multiply")
def multiply_endpoint(a: int, b: int) -> dict[str, int]:
    return {"result": multiply(a, b)}
