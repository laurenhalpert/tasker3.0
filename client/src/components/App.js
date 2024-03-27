import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import TaskList from './TaskList';
import CompletionStatusBar from "./CompletionStatusBar";
import Filters from './Filters';

// import {tasks} from "../constants/tasks"


function App() {
  
  const [tasks, setTasks] = useState([])
  const [progressStatus, setProgressStatus] = useState(0)

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/api/")
    .then(r=>r.json())
    .then((tasks)=>{
      let completedTasks= tasks.filter((task)=>task.status==="Completed")
      let percentCompleted = (completedTasks.length/tasks.length)*100
      setProgressStatus(percentCompleted)
      setTasks(tasks)
    })
  }, [])
  

  function handleFavorite(taskObj){
    let mappedTasks = tasks.map((task)=>task.id === taskObj.id? taskObj: task)
    setTasks(mappedTasks)
   
  }

  function handleDelete(task_id){
    let filteredTasks = tasks.filter((task)=>task.id !== task_id)
    setTasks(filteredTasks )
    let completedTasks= filteredTasks.filter((task)=>task.status === "Completed")
    let percentCompleted = (completedTasks.length/filteredTasks.length)*100
    setProgressStatus(percentCompleted)
  }

  function handleComplete(taskObj){
    let mappedTasks = tasks.map((task)=>task.id === taskObj.id? taskObj: task)
    setTasks(()=>mappedTasks)
    let completedTasks= mappedTasks.filter((task)=>task.status === "Completed")
    let percentCompleted = (completedTasks.length/mappedTasks.length)*100
    setProgressStatus(percentCompleted)
  }

  function handleAddTask(taskObj){
    console.log(taskObj)
    setTasks([...tasks, taskObj])
    let completedTasks= tasks.filter((task)=>task.status === "Completed")
    let percentCompleted = (completedTasks.length/tasks.length)*100
    setProgressStatus(percentCompleted)
  }

  function handleEditTask(taskObj){
    let mappedTasks = tasks.map((task)=>task.id === taskObj.id? taskObj: task)
    setTasks(()=>mappedTasks)
    let completedTasks= mappedTasks.filter((task)=>task.status === "Completed")
    let percentCompleted = (completedTasks.length/mappedTasks.length)*100
    setProgressStatus(percentCompleted)

  }
  
  return (
    <div className="App">
      <Header />
      <CompletionStatusBar progressStatus={progressStatus}/>
      <h2 className='count'>Number of Tasks: {tasks.length}</h2>
      <Filters />
      <TaskList tasks={tasks} onFavorite={handleFavorite} onDelete={handleDelete} onComplete={handleComplete} onAddTask={handleAddTask} onEditTask={handleEditTask} />
    </div>
  );
}

export default App;


