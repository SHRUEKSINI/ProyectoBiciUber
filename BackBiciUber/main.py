from typing import Union
from fastapi import FastAPI
from factura import facturaRouter
from cliente import clienteRouter
from servicios import serviciosRouter
from productos import productosRouter
from fastapi.middleware.cors import CORSMiddleware

BiciUberAPP = FastAPI()

BiciUberAPP.include_router (facturaRouter)
BiciUberAPP.include_router (clienteRouter)
BiciUberAPP.include_router (serviciosRouter)
BiciUberAPP.include_router (productosRouter)


origins = [
    "http://localhost:5173",
    "http://localhost.tiangolo.com",
    "https://localhost.tiangolo.com",
    "http://localhost",
    "http://localhost:8080",
    "http://localhost:3000",
]

BiciUberAPP.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@BiciUberAPP.get("/")
async def read_root():
    return {"Hello": "World"}

#solo parametro la url debe enviarse: "http://127.0.0.1:8000/items/?q=infoComoParametro"
@BiciUberAPP.get("/items/")
async def read_param_item(q: Union[str, None] = None):
    return {"q": q}

#solo info como parte de la url debe enviarse: "http://127.0.0.1:8000/items/5"
@BiciUberAPP.get("/items/{item_id}")
async def read_paramInPath_item(item_id: int):
    return {"item_id": item_id}

#realizar envio de información de las 2 formas en simultánea en la url debe enviarse: "http://127.0.0.1:8000/items/5?q=infoComoParametro"
@BiciUberAPP.get("/items/{item_id}")
async def read_both_paramTypes_item(item_id: int, q: Union[str, None] = None):
    return {"item_id": item_id, "q": q}
    
@BiciUberAPP.delete("/items_del/{item_id}")
async def delete_by_id(item_id: int):
    return {"resultado": "Se ha eliminado correctamente el item solicitado"}
    
    
    