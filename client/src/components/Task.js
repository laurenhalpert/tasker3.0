import React from "react";

function Task({ task, onFavorite }){
    function handleClick(e, id){
        console.log(e)
        console.log(id)
        console.log(task)
        fetch(`http://127.0.0.1:5000/api/${id}`, {
            method: "PATCH",
            headers: {
                    
                "Content-Type": "application/json",
            },
            body: JSON.stringify(task)
        })
        .then(r=>r.json())
        .then(task => {
            
            onFavorite(task)
            
        })
    }

    return(
        <tr className="taskCard">
            
            <td>
                <p onClick={(e, id)=> handleClick(e, task.id)}>{task.favorite? "★":"☆"}</p>
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