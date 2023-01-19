from typing import List
from sqlalchemy.orm.session import Session
from fastapi import APIRouter, Depends
from schemas.users import UserAuth
from typing import List

from views.comment import (
    comment_create as comment_create_,
    comment_list as comment_list_
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


@router.post('/create')
def comment_create(request: CommentBase, db: Session = Depends(get_db), current_user: UserAuth = Depends(get_current_user)):
    return comment_create_(db, request)



@router.get('/all/{post_id}', response_model=Comment)
def comment_list(post_id: int, db: Session = Depends(get_db)):
    return comment_list_(db, post_id)

