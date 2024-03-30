# Tasker

## Summary

Tasker is a React app with a Python backend that allows the end user to track their todo list

## Video Walkthrough

https://youtu.be/y0ezgLk-4Go

## Features

### List View/Progress View

There are two view options for the end user that they can toggle between: List View and Progress View.

In List View, the end user sees their todo tasks in list form. They can view all information about the listed tasks all at once (favorited?, task name, category, and status). This is the default view.

In Progress View, the end user sees their todo tasks in columns based on their status category. This view offers the end user a quick look at the progress status of their todo tasks.

### Progress Status Bar

Available in both List View and Progress View.

Visually shows the end user the percentage of the todo tasks they have completed. The bar updates as tasks are deleted, added, or updated to maintain accuracy.

### Task Count

Available in both List View and Progress View.

Provides quick info for the end user to know how many todo tasks they have in total. The count updates as tasks are added or deleted.

### Filters

Available only in List View.

An end user can select one or more filters to filter their todo tasks. If "All" is selected or no filters are selected, all todo tasks will be shown.

### Favorite Button

Available only in List View.

An empty star button demonstrates that the corresponding task is not favorited. Once clicked, the task is favorited and the star button fills in. To un-favorite a task, the user can click on a solid-fill star button next to the corresponding task. 

### Checkmark Button

Available only in List View.

Once clicked, it changes the status of the corresponding task to "Completed" and the task progress status bar will update.

### Pencil Button

Available only in List View.

Once clicked, the task form appears at the bottom of the page populated with the current task name, category, and status. The end user can then update 0 or more of the inputs and hit submit to update the attributes of the task.

### Trashcan Button

Available only in List View.

Once clicked, the task will be removed from the list of todo tasks, the progress status bar will update, and the task count will update.

### Create New Task Button

Available only in List View.

Once clicked, the new task form will appear at the bottom of the page. The end user then fills in the form, hits submit, and the task is added to the list of todo tasks, the progress status bar is updated, and the task count is updated.

## Getting Started

### Start server

In the flask_server directory, run:

`python app.py`

### Seed database

In the flask_server directory, run:

`python seed.py`

### Install dependencies

In the client directory, run:

`pnpm install`

### Start client

In the client directory, run:

`npm start`


