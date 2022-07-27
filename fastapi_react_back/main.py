from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from db.database import SessionLocal
from db import crud
from model.model import Page
from datetime import datetime
from config.config import config

origins = [
    config.front_url,
    config.front_url_loal,
]

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/api/notice")
def get_notice(param: Page, db: Session = Depends(get_db)):
    skip = (param.pageNo * 5) - 5
    limit = 5
    search_text = param.searchText
    data = crud.get_data(db, skip=skip, limit=limit, category_code='C001', search=search_text)
    result = []
    for data_val  in data:
        temp_dict = {}
        temp_dict['title_id'] = data_val[0].title_id
        temp_dict['title'] = data_val[0].title
        temp_dict['reg_date'] = ''
        if data_val[0].register_datetime != None:
            temp_dict['reg_date'] = data_val[0].register_datetime.strftime('%y-%m-%d')
        contents = crud.get_content(db, title_id=data_val[0].title_id)
        temp_dict['content'] = []
        for contents_val in contents:
            temp_dict['content'].append(contents_val.content)
        temp_dict['file_path'] = data_val[1].model_filePath
        result.append(temp_dict)
    return result

@app.post("/api/tour")
def get_tour(param: Page, db: Session = Depends(get_db)):
    skip = (param.pageNo * 5) - 5
    limit = 5
    search_text = param.searchText
    data = crud.get_data(db, skip=skip, limit=limit, category_code='C002', search=search_text)
    result = []
    for data_val  in data:
        temp_dict = {}
        temp_dict['title_id'] = data_val[0].title_id
        temp_dict['title'] = data_val[0].title
        temp_dict['reg_date'] = ''
        if data_val[0].register_datetime != None:
            temp_dict['reg_date'] = data_val[0].register_datetime.strftime('%y-%m-%d')
        contents = crud.get_content(db, title_id=data_val[0].title_id)
        temp_dict['content'] = []
        for contents_val in contents:
            temp_dict['content'].append(contents_val.content)
        temp_dict['file_path'] = data_val[1].model_filePath
        result.append(temp_dict)
    return result