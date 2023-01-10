from sqlalchemy.orm.session import Session
from schemas.users import UserBase
from db.users.models import UserModel
from utils.hashing import Hash

def create_user(db: Session, request: UserBase):
    new_user  = UserModel (
        username = request.username,
        email = request.email,
        password = Hash.encrypt(request.password)
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user