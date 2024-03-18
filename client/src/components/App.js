import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import TaskList from './TaskList';
import CompletionStatusBar from "./CompletionStatusBar";

// import {tasks} from "../constants/tasks"


function App() {
  
  const [tasks, SetTasks] = useState([])

  useEffect(()=>{
    fetch("../tasks.json")
    .then(r=>r.json())
    .then((tasks)=>console.log(tasks))
  })

  
  return (
    <div className="App">
      <Header />
      <TaskList tasks={tasks}/>
      <CompletionStatusBar />
    </div>
  );
}

export default App;

// TODO: create tasks in tasks.json
// TODO: Redux
// TODO: Formik