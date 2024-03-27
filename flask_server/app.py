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
    def post(self):
        request_json = request.get_json()
        taskName=request_json['taskName']
        category=request_json['category']
        status=request_json['status']
        try:
            task=Task(taskName=taskName, category=category, status=status)
            db.session.add(task)
            db.session.commit()
            return task.to_dict(), 201
        except IntegrityError:
                return {'error': '422 Unprocessable Entity'}, 422
class FavoriteTasks(Resource):
    def patch(self, task_id):
        
        task =Task.query.filter(Task.id == task_id).first()
        
        task.favorite =  not task.favorite

        db.session.add(task)
        db.session.commit()
        return task.to_dict(), 201
class EditTasks(Resource):
    def patch(self, edited_task_id):
        request_json = request.get_json()
        taskName=request_json['taskName']
        category=request_json['category']
        status=request_json['status']

        task=Task.query.filter(Task.id == edited_task_id).first()  
        task.taskName=taskName
        task.category=category
        task.status=status

        db.session.add(task)
        db.session.commit()
        return(task.to_dict(), 201)  
        
class DeleteTasks(Resource):
    def delete(self, deleted_task_id):
        task = Task.query.filter(Task.id == deleted_task_id).first()

        db.session.delete(task)
        db.session.commit()
        return {}, 204
class CompleteTasks(Resource):
    def patch(self, completed_task_id):
        task = Task.query.filter(Task.id == completed_task_id).first()

        task.status = "Completed"

        db.session.add(task)
        db.session.commit()
        return task.to_dict(), 201
 
api.add_resource(TaskTasks, '/api/', endpoint="/")
api.add_resource(FavoriteTasks, '/api/favorite/<int:task_id>', endpoint="task_id")
api.add_resource(DeleteTasks, '/api/delete/<int:deleted_task_id>', endpoint="deleted_task_id")
api.add_resource(CompleteTasks, '/api/complete/<int:completed_task_id>', endpoint="completed_task_id")
api.add_resource(EditTasks, '/api/edit/<int:edited_task_id>', endpoint="edited_task_id")

if __name__ == '__main__':
    app.run(port=5000, debug=True)