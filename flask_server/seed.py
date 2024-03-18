#!/usr/bin/env python3


from random import random, randint, choice as rc




from app import app
from models import db, Task


from flask import session 


def delete_records():
    db.session.query(Task).delete()
    db.session.commit()
    
taskNames=["Dishes", "Gym", "Homework", "Coding", "Algorithms", "Meal Prep"]

categories= ["Home", "Health", "Career"]

statuses=["Not Yet Started", "In Progress", "Paused", "Completed"]



def create_records():
    
    tasks = [
        Task(
            favorite=rc([0,1]),
            taskName=rc(taskNames),
            category=rc(categories),
            status=rc(statuses)
        ) for task in taskNames
    ]

  

    db.session.add_all(tasks)
    db.session.commit()
    return tasks





if __name__ == '__main__':
    
    with app.app_context():
        print("Starting seed...")
        
        delete_records()
        tasks = create_records()
        