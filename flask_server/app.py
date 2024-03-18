from flask import request, session, make_response, jsonify
from flask_restful import Resource
from sqlalchemy.exc import IntegrityError
import sys


from config import app, db, api
from models import Task

class TaskTasks(Resource):
    def get(self):
        tasks=Task.query.all()
        return [task.to_dict() for task in tasks], 200
 
api.add_resource(TaskTasks, '/api/', endpoint="/")