from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import cleverCursor

serviciosRouter =  APIRouter()

class ServiciosDB(BaseModel):
    despinchar: int
    remolcada: str
    refaccion: str
    mantenimiento: str
    limpieza:str
    revision:str
    
@serviciosRouter.get("/Servicios/", status_code=status.HTTP_302_FOUND)
async def get_users():
    selectAll_query = 'Select * from servicios'
    cleverCursor.execute(selectAll_query)
    result = cleverCursor.fetchall()
    return result

@serviciosRouter.post("/Tipo_Servicios", status_code=status.HTTP_201_CREATED)
def insert_user(serviciosPost: ServiciosDB):
    insert_query = """
    INSERT INTO servicios (servicios_Id,despinchar,remolcada,refaccion,mantenimiento,limpieza,revision)
    VALUES (%s,%s,%s)
    """
    values = (serviciosPost.servicios_Id,serviciosPost.despinchar,serviciosPost.remolcada,serviciosPost.refaccion,serviciosPost.mantenimiento,serviciosPost.limpieza,serviciosPost.revision)

    try:
        cleverCursor.execute(insert_query, values)
        MysqlConn.commit()
    except mysqlConn.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "User inserted sucessfully"}   