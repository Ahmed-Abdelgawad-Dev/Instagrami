from fastapi import APIRouter, Depends
from views.user import Session, create_user as create_user_
from sqlalchemy.orm.session import Session
from schemas.users import UserDisplay, UserBase
from db.config import get_db

router = APIRouter(
    prefix='/user',
    tags=['user']
)

@router.post('', response_model=UserDisplay)
def create_user(request: UserBase, db: Session = Depends(get_db)):
    return create_user_(db, request)