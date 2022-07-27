from ast import Str
from pydantic import BaseModel

class Page(BaseModel):
    pageNo: int
    searchText: str