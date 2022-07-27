from sqlalchemy.orm import Session
from .models import Title, Model

def get_data(db: Session, skip, limit, category_code, search):
        search_text = '%{}%'.format(search)
        data = db.query(Title, Model).\
                join(Model, Title.title_id == Model.title_id).\
                filter(Title.title_Yn == 'Y', Title.category_code == category_code, Title.title.like(search_text)).\
                order_by(-Title.register_datetime).\
                offset(skip).\
                limit(limit)
        return data

def get_content(db: Session, title_id):
        query = f'''
                SELECT title_id, content_num, content
                FROM tb_content 
                WHERE title_id = {title_id} 
                ORDER BY content_num    
                '''
        data = db.execute(query)
        return data