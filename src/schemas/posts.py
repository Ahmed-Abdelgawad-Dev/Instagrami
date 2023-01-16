from pydantic import BaseModel
from datetime import datetime
from typing import Optional


class User(BaseModel):
    username: str
    email: str
    class Config():
        orm_mode = True

class PostBase(BaseModel):
    img_url     : str
    img_url_type: str
    caption     : str
    user_id     : int


class PostDisplay(BaseModel):
    id          : int
    img_url     : str
    img_url_type: str
    caption     : str
    timestamp   : datetime
    user_id     : int
    user        : User
    class Config():
        orm_mode = True
