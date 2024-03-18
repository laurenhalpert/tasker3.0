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
class UpdateTasks(Resource):
    def patch(self, task_id):
        print(task_id)
        task =Task.query.filter(Task.id == task_id).first()
        
        task.favorite =  not task.favorite

        db.session.add(task)
        db.session.commit()
        return task.to_dict(), 201

 
api.add_resource(TaskTasks, '/api/', endpoint="/")
api.add_resource(UpdateTasks, '/api/<int:task_id>', endpoint="task_id")

if __name__ == '__main__':
    app.run(port=5000, debug=True)