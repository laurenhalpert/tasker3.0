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