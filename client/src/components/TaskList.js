import React from "react";
import Task from "./Task";

function TaskList ({ tasks, onFavorite }){

    
    return(
        <div className="taskList">
            <table>
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
                    {tasks.map((task)=><Task key={task.id} task={task} onFavorite={onFavorite}/>)}
                </tbody>
               
            </table>
            <button id="newTaskButton" >Create New Task</button>

            
        </div>
    )
}

export default TaskList