from sqlalchemy.orm.session import Session
from datetime import datetime
from fastapi import Response
from typing import List
from schemas.posts import PostBase
from db.models.post import PostModel
from fastapi.exceptions import HTTPException
from fastapi import status, Depends
from db.config import get_db, Base


def create_post(db: Session, request: PostBase):
    new_post = PostModel(
        img_url=request.img_url,
        img_url_type=request.img_url_type,
        caption=request.caption,
        timestamp=datetime.now(),
        user_id=request.user_id,
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post


def get_posts(db: Session):
    posts = db.query(PostModel).all()
    return posts


async def delete_post(db: Session, id: int, user_id: int) -> Response:
    post = db.query(PostModel).filter(PostModel.id == id).first()
    print(post.id)
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"{id} is not exist.")
    if post.user_id != user_id:
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN,
                            detail="Not allowed, post belongs to another user")
    db.delete(post)
    db.commit()
    return "Deleted"
