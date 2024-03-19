import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import TaskList from './TaskList';
import CompletionStatusBar from "./CompletionStatusBar";

// import {tasks} from "../constants/tasks"


function App() {
  
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    fetch("http://127.0.0.1:5000/api/")
    .then(r=>r.json())
    .then((tasks)=>setTasks(tasks))
  }, [])

  function handleFavorite(taskObj){
    let mappedTasks = tasks.map((task)=>task.id === taskObj.id? taskObj: task)
    setTasks(mappedTasks)
   
  }

  function handleDelete(taskObj){
    let filteredTasks = tasks.filter((task)=>task.id !== taskObj.id)
    setTasks(filteredTasks )
  }

  function handleComplete(taskObj){
    let mappedTasks = tasks.map((task)=>task.id === taskObj.id? taskObj: task)
    setTasks(mappedTasks)
  }
  
  return (
    <div className="App">
      <Header />
      <CompletionStatusBar />
      <TaskList tasks={tasks} onFavorite={handleFavorite} onDelete={handleDelete} onComplete={handleComplete} />
    </div>
  );
}

export default App;

// TODO: create tasks in tasks.json
// TODO: Redux
// TODO: Formik