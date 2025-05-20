from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import cleverCursor,mysqlConn
from datetime import date

clienteRouter =  APIRouter()

class ClienteDB(BaseModel):
    nombre: str
    cedula: int
    correo_electronico: str
    direccion: str
    edad: int
    telefono: int
    
@clienteRouter.get("/Cliente/", status_code=status.HTTP_302_FOUND)
async def get_users():
    selectAll_query = 'Select * from cliente'
    cleverCursor.execute(selectAll_query)
    result = cleverCursor.fetchall()
    return result

@clienteRouter.post("/Cliente_Login", status_code=status.HTTP_201_CREATED)
def insert_user(clientePost: ClienteDB):
    insert_query = """
    INSERT INTO cliente (nombre,cedula,correo,direccion,edad,telefono)
    VALUES (%s,%s,%s,%s,%s,%s)
    """
    values =(clientePost.nombre,clientePost.cedula,clientePost.correo_electronico,clientePost.direccion,clientePost.edad,clientePost.telefono)

    try:
        cleverCursor.execute(insert_query, values)
        mysqlConn.commit()
    except mysqlConn.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "User inserted sucessfully"}   