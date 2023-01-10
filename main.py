from fastapi import FastAPI
from db.users import models
from db.config import engine
from routers import user


app = FastAPI()
app.include_router(user.router)



@app.get('/')
async def main():
    return 'main entity'

models.Base.metadata.create_all(engine)