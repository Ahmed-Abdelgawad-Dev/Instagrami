import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware

from db.config import engine
from db.models import user, post
from routers import user, post, comment
from auth import authentication


app = FastAPI()
app.include_router(user.router)
app.include_router(post.router)
app.include_router(comment.router)
app.include_router(authentication.router)


origins = ['http://localhost:3000']
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def main():
    return 'main entity'

user.Base.metadata.create_all(engine)
post.Base.metadata.create_all(engine)
comment.Base.metadata.create_all(engine)
app.mount('/images', StaticFiles(directory='images'), name='images')


if __name__ == '__main__':
    uvicorn.run(app, host="0.0.0.0", port=8000)

