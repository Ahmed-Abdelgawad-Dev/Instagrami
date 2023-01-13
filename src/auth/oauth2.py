from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session
from jose import JWTError, jwt

from datetime import datetime, timedelta
from typing import Optional
from dotenv import load_dotenv

from views.user import get_user as get_user_
from db.config import get_db


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

load_dotenv()
import os
# >openssl rand -hex 32 to generate
SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM, ACCESS_TOKEN_EXPIRATION_MIN = "HS256", 30


def create_access_token(data: dict, expires_delta: Optional[timedelta] | None = None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp": expire})
    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return encoded_jwt


async def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(get_db)):
    credentials_exception = HTTPException(
        status_code = status.HTTP_401_UNAUTHORIZED,
        detail      = "Could not validate credentials",
        headers     = {"WWW-Authenticate": "Bearer"},
    )
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get("username")
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception

    user = get_user_(db, username=username)
    if user is None:
        raise credentials_exception
    return user
