import React from "react";

function Task({ task, onFavorite, onDelete, onComplete }){
    function handleClick(e, id){
        console.log(e)
        console.log(id)
        console.log(task)
        fetch(`http://127.0.0.1:5000/api/favorite/${id}`, {
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

    function handleDelete(e, id){
        fetch(`http://127.0.0.1:5000/api/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            }
        })
        
        .then(()=>onDelete(id))
    }

    function handleComplete(e, id){
        fetch(`http://127.0.0.1:5000/api/complete/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(r=>r.json())
        .then(task=>onComplete(task))
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
                <button className="completeButton" onClick={(e, id)=>handleComplete(e, task.id)}>&#x2713;</button>
                <button className="editButton">&#9999;</button>
                <button className="deleteButton" onClick={(e, id)=> handleDelete(e, task.id)}>&#128465;</button>
            </td>
        
        </tr>
    )
}

export default Task