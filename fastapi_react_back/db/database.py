from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
import urllib.parse
from . import configs as cfg

password = urllib.parse.quote_plus(cfg.DB_PASSWORD)

SQLALCHEMY_DATABASE_URL = 'mysql+pymysql://'+cfg.DB_ACCOUNT+':'+password+'@'+cfg.DB_URL+':'+cfg.DB_PORT+'/'+cfg.DB_NAME

engine = create_engine(SQLALCHEMY_DATABASE_URL)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()