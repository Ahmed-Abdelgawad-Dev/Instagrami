from typing import List
from sqlalchemy.orm.session import Session
from fastapi import APIRouter, Depends

from schemas.users import UserAuth

from views.comment import (
    create as create_comment__,
    comments as comments_list__
)
from auth.oauth2 import get_current_user
from views.user import get_user
from schemas.comments import Comment, CommentBase
from db.config import get_db, Base
from views.user import get_user

router = APIRouter(
    prefix='/comments',
    tags=['comment']
)


@router.get('/all-comments/{post_id}')
def comment_list(post_id: int, db: Session = Depends(get_db)):
    return comments_list__(db, post_id)


@router.post('/create')
def comment_create(request: CommentBase, db: Session = Depends(get_db), current_user: UserAuth = Depends(get_current_user)):
    return create_comment__(db, request)
