import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import TaskList from './TaskList';
import CompletionStatusBar from "./CompletionStatusBar";
import Filters from './Filters';
import TaskProgress from './TaskProgress';

// import {tasks} from "../constants/tasks"


function App() {
  
  const [tasks, setTasks] = useState([])
  const [progressStatus, setProgressStatus] = useState(0)
  const [filters, setFilters] = useState([]);
  const [progressView, setProgressView] = useState("off")

  useEffect(()=>{
    // What happens if your API is served somewhere else or on a different port?
    // It's useful to save your API url as an environment variable
    // So you would set up your environment variable like:
    // API_URL=http://127.0.0.1:5000/api/
    // And in your code, you would reference it like:
    // {process.env.API_URL}
    // https://create-react-app.dev/docs/adding-custom-environment-variables/
    fetch("http://127.0.0.1:5000/api/")
    .then(r=>r.json())
    .then((tasks)=>{
      let completedTasks= tasks.filter((task)=>task.status==="Completed")
      let percentCompleted = (completedTasks.length/tasks.length)*100
      setProgressStatus(percentCompleted)
      if (filters.length !== 0 && !filters.includes("all") && filters.includes("favorites")){
      
        let filteredTasks = tasks.filter ((task)=>filters.includes(task.status) || task.favorite===true)
        setTasks(filteredTasks)
        
      } else if(filters.length !==0 && !filters.includes("all")) {
        let filteredTasks = tasks.filter((task)=>filters.includes(task.status))
        setTasks(filteredTasks)
        
      } else {
       
        setTasks(tasks)
      }
     
      
    })
  }, [filters])
  

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

  function handleFilterChange(filterStr, bool){
    if (bool){
      setFilters([...filters, filterStr])
    } else {
      let filteredFilters = filters.filter((val)=>val!==filterStr)
      setFilters(filteredFilters)
    }

  }

  function handleToggle(val){
    setProgressView(()=>val)
  }
 
  return (
    <div className="App">
      <Header progressView={progressView} onToggle={handleToggle} />
      <CompletionStatusBar progressStatus={progressStatus}/>
      <h2 className='count'>Number of Tasks: {tasks.length}</h2>
      {progressView === "off"? <Filters onFilterChange={handleFilterChange} />: null}
      {/* <Filters onFilterChange={handleFilterChange} /> */}
      {progressView==="off"? <TaskList tasks={tasks} onFavorite={handleFavorite} onDelete={handleDelete} onComplete={handleComplete} onAddTask={handleAddTask} onEditTask={handleEditTask} />: <TaskProgress tasks={tasks}/>}
    </div>
  );
}

export default App;


