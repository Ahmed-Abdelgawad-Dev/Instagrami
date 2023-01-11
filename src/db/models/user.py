from sqlalchemy import Column, Integer, String
from sqlalchemy.orm import relationship
from db.config import Base


class UserModel(Base):
    __tablename__ = 'user'
    id       = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email    = Column(String)
    password = Column(String)
    posts     = relationship('PostModel', back_populates='user')