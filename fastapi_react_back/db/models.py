from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship

from .database import Base

class Title(Base):
    __tablename__ = "tb_title"

    title_id = Column(Integer, primary_key=True)
    category_code = Column(String)
    title = Column(String)
    title_Yn = Column(String)
    register_datetime = Column(DateTime)
    register_id = Column(String)
    modify_datetime = Column(DateTime)
    modify_id = Column(String)

class Model(Base):
    __tablename__ = "tb_model"

    title_id = Column(Integer, primary_key=True)
    model_state = Column(String)
    model_filePath = Column(String)
    register_datetime = Column(DateTime)
    register_id = Column(String)
    modify_datetime = Column(DateTime)
    modify_id = Column(String)