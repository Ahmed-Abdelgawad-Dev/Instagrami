from sqlalchemy.orm.session import Session
import datetime
from datetime import datetime
from fastapi import Response
from schemas.posts import PostBase
from db.models.comments import CommentModel
from fastapi.exceptions import HTTPException
from schemas.comments import CommentBase
from fastapi import status
from db.config import get_db, Base
from schemas.comments import Comment, CommentBase




def comment_create(db: Session, request: CommentBase):
    new_comment = CommentModel(
        text     = request.text,
        username = request.username,
        post_id = request.post_id,
        timestamp = datetime.now(),
    )
    db.add(new_comment)
    db.commit()
    db.refresh(new_comment)
    return new_comment


def comment_list(db: Session, post_id: int):
    comments = db.query(CommentModel).filter(CommentModel.id == post_id)
    return comments