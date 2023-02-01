from sqlalchemy.orm.session import Session
import datetime
from datetime import datetime
from db.models.comments import CommentModel
from schemas.comments import CommentBase
from db.config import get_db, Base
from schemas.comments import Comment, CommentBase


def comments(db: Session, post_id: int):
    comment_list = db.query(CommentModel).filter(CommentModel.id == post_id).all()
    return comment_list


def create(db: Session, request: CommentBase):
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
