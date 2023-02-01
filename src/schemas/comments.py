from pydantic import BaseModel
from datetime import datetime


class Comment(BaseModel):
    text: str
    username: str
    post_id: int
    timestamp: datetime
    class Config():
        orm_mode = True


class CommentBase(BaseModel):
    text     : str
    username : str
    post_id  : int
    timestamp: datetime