from sqlalchemy import Column, DateTime, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.config import Base

class PostModel(Base):
    __tablename__ = 'post'
    id           = Column(Integer, primary_key=True, index=True)
    img_url      = Column(String)
    img_url_type = Column(String)
    caption      = Column(String)
    timestamp    = Column(DateTime)
    user_id      = Column(Integer, ForeignKey('user.id'))
    user         = relationship('UserModel', back_populates='posts')
    comments     = relationship("CommentModel", back_populates="post")
