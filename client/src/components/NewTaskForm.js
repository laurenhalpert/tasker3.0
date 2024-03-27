import React, { useState } from "react";

function NewTaskForm({ task, onAddTask, resetClick, action, onEditTask }){
 
    const [formData, setFormData] = useState(action!=="PATCH"? {
        favorite: false,
        taskName: "",
        category: "",
        status:""
    }: {
        favorite: task.favorite,
        taskName: task.taskName,
        category: task.category,
        status: task.status
    })
    

    function handleChange(e){
        
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleSubmit(e, id){
        e.preventDefault()
        
        fetch("http://127.0.0.1:5000/api/", {
            method: "POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
        .then(r=>r.json())
        .then(newTask=>{
            onAddTask(newTask)
            resetClick()
        })
        
        
    }
    function handleEdit(e, id){
        e.preventDefault()
        task.taskName=formData.taskName
        task.category=formData.category
        task.status=formData.status
        fetch(`http://127.0.0.1:5000/api/edit/${id}`, {
            method: "PATCH",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(task)
        })
        .then(r=>r.json())
        .then(task=>{
            console.log(task)
            onEditTask(task)
            resetClick()
        })
    }


    return(
        <div className="newTaskForm">
            <form onSubmit={action==="POST"? handleSubmit: (e, id)=>handleEdit(e, task.id)}>
                <label htmlFor="taskNameField" >Task Name: </label>
                <input id="taskNameField" type="text" name="taskName" value={formData.taskName} onChange={handleChange}></input> 
                <br></br>
                <label htmlFor="categoryField">Category: </label>
                <select id="categoryField" name="category" value={formData.category} onChange={handleChange}>
                    <option value="" disabled>Choose here</option>
                    <option value="Career">Career</option>
                    <option value="Health">Health</option>
                    <option value="Home">Home</option>
                </select>
                <label htmlFor="status">Status: </label>
                <select id="status" name="status" value={formData.status} onChange={handleChange}>
                    <option value="" disabled>Choose here</option>
                    <option value="Not Yet Started">Not Yet Started</option>
                    <option value="In Progress">In Progress</option>
                    <option value="Paused">Paused</option>
                    <option value="Completed">Completed</option>
                </select>
                <br></br>
                <button id="submitNewTaskBtn" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default NewTaskForm;