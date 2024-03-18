from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy.orm import validates, relationship, backref, sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from config import db

from sqlalchemy.ext.associationproxy import association_proxy

Base=declarative_base()

class Task (db.Model, SerializerMixin):
    __tablename__="tasks"

    id = db.Column(db.Integer, primary_key= True)
    favorite=db.Column(db.Boolean)
    taskName=db.Column(db.String)
    category=db.Column(db.String)
    status=db.Column(db.String)

    def __repr__(self):
        return f'<Task: {self.taskName}>'