from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import cleverCursor,mysqlConn
from datetime import date

facturaRouter =  APIRouter()

class facturaDB(BaseModel):
    numero_de_factura: int
    fecha_expedicion: date 
    nombre_del_producto: str
    descripcion_productos: str
    cantidad: int
    metodo_de_pago:str
    precio:int

@facturaRouter.get("/factura/", status_code=status.HTTP_302_FOUND)
async def get_users():
    selectAll_query = 'Select * from factura'
    cleverCursor.execute(selectAll_query)
    result = cleverCursor.fetchall()
    return result

@facturaRouter.post("/Factura_Data", status_code=status.HTTP_201_CREATED)
def insert_user(facturaPost: facturaDB):
    insert_query = """
    INSERT INTO factura (numero_de_factura,fecha_de_expedicion,nombre,descripcion_productos,cantidad,metodo_de_pago,precio)
    VALUES (%s,%s,%s,%s,%s,%s,%s)
    """
    values = (facturaPost.numero_de_factura,facturaPost.fecha_de_expedicion,facturaPost.nombre,facturaPost.descripcion_productos,facturaPost.cantidad,facturaPost.metodo_de_pago,facturaPost.precio)

    try:
        cleverCursor.execute(insert_query, values)
        mysqlConn.commit()
    except mysqlConn.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "Successful invoice"}     
