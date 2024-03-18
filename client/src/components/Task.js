import React from "react";

function Task({ task }){
    

    return(
        <tr className="taskCard">
            
            <td>
                <p>{task.favorite? "★":"☆"}</p>
            </td>
            <td>{task.taskName}</td>
            <td>{task.category}</td>
            <td>{task.status}</td>
            <td>
                <button className="completeButton">&#x2713;</button>
                <button className="editButton">&#9999;</button>
                <button className="deleteButton">&#128465;</button>
            </td>
        
        </tr>
    )
}

export default Task