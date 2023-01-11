import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from db.models import user, post
from db.config import engine
from routers import user, post
from routers.post import upload_file
import sys
sys.setrecursionlimit(2000)


app = FastAPI()
app.include_router(user.router)
app.include_router(post.router)



@app.get('/')
async def main():
    return 'main entity'

user.Base.metadata.create_all(engine)
post.Base.metadata.create_all(engine)
app.mount('/images', StaticFiles(directory='images'), name='images')
# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)