import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from db.config import engine
from db.models import user, post
from routers import user, post
from auth import authentication


app = FastAPI()
app.include_router(user.router)
app.include_router(post.router)
app.include_router(authentication.router)



@app.get('/')
async def main():
    return 'main entity'

user.Base.metadata.create_all(engine)
post.Base.metadata.create_all(engine)
app.mount('/images', StaticFiles(directory='images'), name='images')


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)

