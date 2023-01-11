from sqlalchemy.orm.session import Session
from datetime import datetime
from typing import List
from schemas.posts import PostBase
from db.models.post import PostModel


def create_post(db: Session, request: PostBase):
    new_post  = PostModel (
        img_url      = request.img_url,
        img_url_type = request.img_url_type,
        caption      = request.caption,
        timestamp    = datetime.now(),
        user_id   = request.user_id,
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


def get_posts(db: Session):
    posts = db.query(PostModel).all()
    return posts


