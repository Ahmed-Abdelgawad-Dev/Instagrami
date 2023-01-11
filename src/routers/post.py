from fastapi import APIRouter, Depends, status, File, UploadFile
from fastapi.exceptions import HTTPException
import shutil
import datetime
from typing import List
from views.post import (
    Session,
    create_post as create_post_,
    get_posts as get_posts_
)
from schemas.posts import PostDisplay, PostBase, User
from db.config import get_db, Base


router = APIRouter(
    prefix='/posts',
    tags=['post']
)


img_url_types = ['relative', 'absolute']

@router.post('/create', response_model=PostDisplay)
def create_post(request: PostBase, db: Session = Depends(get_db)):
    if request.img_url_type  not in img_url_types:
        raise HTTPException(
            status_code=status.HTTP_422_UNPROCESSABLE_ENTITY,
            detail='img_url_type must be absolute or relative'
        )
    return create_post_(db, request)


@router.get('', response_model=List[PostDisplay])
def get_posts(db: Session = Depends(get_db)):
    return get_posts_(db)

@router.post('/upload_file')
def upload_file(image_: UploadFile = File(description='Upload a file')):
    uploaded_file_name = f'{datetime.datetime.now()}__{image_.filename}'
    file_ = f"images/{uploaded_file_name}"
    with open (file_, 'w+b') as  file__uploaded:
        shutil.copyfileobj(image_.file, file__uploaded)
    return {
        'file_name': file_
    }