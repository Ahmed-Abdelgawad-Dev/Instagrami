from sqlalchemy import Column, DateTime, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from db.config import Base



class CommentModel(Base):
    __tablename__ = 'comment'
    id        = Column(Integer, primary_key=True, index=True)
    text      = Column(String)
    username  = Column(String)
    timestamp = Column(DateTime)
    post_id   = Column(Integer, ForeignKey('post.id'))
    post      = relationship("PostModel", back_populates="comments")
