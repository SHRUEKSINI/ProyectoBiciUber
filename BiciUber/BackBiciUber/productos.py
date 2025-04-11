from fastapi import APIRouter, HTTPException, status
from pydantic import BaseModel
from Clever_MySQL_conn import cleverCursor

productosRouter =  APIRouter()

class ProductosDB(BaseModel):
    bomba_de_aire: int
    kit_de_parches: str
    palancas_desmontables: str
    tubo_de_solucion: str
    corta_cadena:str
    extrator_de_piñones:str
    
    
@productosRouter.get("/Productos/", status_code=status.HTTP_302_FOUND)
async def get_users():
    selectAll_query = 'Select * from productos'
    cleverCursor.execute(selectAll_query)
    result = cleverCursor.fetchall()
    return result

@productosRouter.post("/Tipo_Productos", status_code=status.HTTP_201_CREATED)
def insert_user(productosPost: ProductosDB):
    insert_query = """
    INSERT INTO servicios (productos_Id,bomba_de_aire,kit_de_parches,palancas_desmontables,tubo_de_solucion,corta_cadena,extrator_de_piñones)
    VALUES (%s,%s,%s,%s,%s,%s)
    """
    values = (productosPost.productos_Id,productosPost.bomba_de_aire,productosPost.kit_de_parches,productosPost.palancas_desmontables,productosPost.tubo_de_solucion,productosPost.corta_cadena,productosPost.extrator_de_piñones)

    try:
        cleverCursor.execute(insert_query, values)
        MysqlConn.commit()
    except mysqlConn.connector.Error as err:
        raise HTTPException(status_code=400, detail=f"Error: {err}")

    return {"message": "User inserted sucessfully"}  