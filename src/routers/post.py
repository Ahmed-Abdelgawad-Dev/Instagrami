from fastapi import APIRouter, Depends, status, File, UploadFile
from fastapi.exceptions import HTTPException
from fastapi import Response
import shutil
from typing import List
from sqlalchemy.orm.session import Session
from fastapi.responses import JSONResponse

from schemas.users import UserAuth
from auth.oauth2 import get_current_user
import datetime
from typing import List
from views.post import (
    create_post as create_post_, get_posts as get_posts_, delete_post as delete_post_
)
from views.user import get_user
from schemas.posts import PostDisplay, PostBase, User
from db.config import get_db, Base


router = APIRouter(
    prefix='/posts',
    tags=['post']
)


img_url_types = ['relative', 'absolute']


@router.post('/create', response_model=PostDisplay)
def create_post(request: PostBase, db: Session = Depends(get_db), current_user: UserAuth = Depends(get_current_user)):
    if request.img_url_type not in img_url_types:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail='img_url_type must be absolute or relative'
        )
    return create_post_(db, request)


@router.get('', response_model=List[PostDisplay])
def get_posts(db: Session = Depends(get_db)):
    return get_posts_(db)


@router.post('/upload_file')
def upload_file(image_: UploadFile = File(description='Upload ( Image or File)')):
    uploaded_file_name = f'{datetime.datetime.now()}__{image_.filename}'
    file_ = f"images/{uploaded_file_name}"
    with open(file_, 'w+b') as file__uploaded:
        shutil.copyfileobj(image_.file, file__uploaded)
    return {
        'file_name': file_
    }


@router.get('/delete/{id}')
async def delete_post(id: int, db: Session = Depends(get_db), active_user: UserAuth = Depends(get_user)) -> Response:
    return delete_post_(db, id, active_user.id)
