import React from "react";
import TaskCard from "./TaskCard";

function TaskProgress({ tasks }){
    let notYetStartedTasks = tasks.filter((task)=>task.status === "Not Yet Started")
    let inProgressTasks = tasks.filter((task)=>task.status === "In Progress")
    let pausedTasks = tasks.filter((task)=>task.status === "Paused")
    let completedTasks = tasks.filter((task)=> task.status === "Completed")
    return(
        <div className="taskProgressView">
            <table className="linear">
                <tr>
                    <th>Not Yet Started</th>
                </tr>
                {notYetStartedTasks.map((task)=><TaskCard key={task.taskName} task={task}/>)}

            </table>
            <table className="linear">
                <tr>
                    <th>In Progress</th>
                </tr>
                {inProgressTasks.map((task)=><TaskCard key={task.taskName} task={task}/>)}
            </table>
            <table className="linear">
                <tr>
                    <th>Paused</th>
                </tr>
                {pausedTasks.map((task)=><TaskCard key={task.taskName} task={task}/>)}
            </table>
            <table className="linear">
                <tr>
                    <th>Completed</th>
                </tr>
                {completedTasks.map((task)=><TaskCard key={task.taskName} task={task}/>)}
            </table>
        </div>
    )
}

export default TaskProgress;