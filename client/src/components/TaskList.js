import React, { useState } from "react";
import Task from "./Task";
import NewTaskForm from "./NewTaskForm";

function TaskList ({ tasks, onFavorite, onDelete, onComplete, onAddTask, onEditTask }){
    const [isClicked, setIsClicked] = useState(false)
    const [action, setAction] = useState("")
    const [selectedTask, setSelectedTask] = useState({})

    function handleClick(e){
        setIsClicked(()=>!isClicked)
        setAction("POST")
    }

    function handleClickState(){
        setIsClicked(!isClicked)
    }

    function handleEdit(taskObj){
        setSelectedTask(taskObj)
    }
    
    return(
        <div className="taskList">
            <table className="listView">
                <thead>
                    <tr>
                        <th></th>
                        <th>Task</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task)=><Task key={task.id} task={task} onFavorite={onFavorite} onDelete={onDelete} onComplete={onComplete} setAction={setAction} onAddTask={onAddTask} resetClick={handleClick} action={action} setClicking={handleClickState} onEdit={handleEdit} />)}
                </tbody>
               
            </table>
            <button id="newTaskButton" onClick={handleClick}>Create New Task</button>
            {isClicked? <NewTaskForm tasks={tasks} onAddTask={onAddTask} resetClick={handleClick} action={action} onEditTask={onEditTask} task={selectedTask}/>: null}

            
        </div>
    )
}

export default TaskList