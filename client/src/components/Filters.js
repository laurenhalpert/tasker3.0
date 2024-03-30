import React from "react";

function Filters ({ onFilterChange }){
    

    function handleChange(e){
      
        onFilterChange(e.target.value, e.target.checked)
        

    }
    return(
        <div className="filters">
            {/* <label htmlFor="filterBy">Filter By: </label> */}
            <label htmlFor="all">All</label>
            <input type="checkbox"id="all" value="all" name="all" onChange={handleChange}></input>
            <label htmlFor="Not Yet Started">Not Yet Started</label>
            <input type="checkbox" id="Not Yet Started" value="Not Yet Started" name="Not Yet Started" onChange={handleChange}></input>
            <label htmlFor="In Progress">In Progress</label>
            <input type="checkbox" id="In Progress" value="In Progress" name="In Progress" onChange={handleChange}></input>
            <label htmlFor="Paused">Paused</label>
            <input type="checkbox"id="Paused" value="Paused" name="Paused" onChange={handleChange}></input>
            <label htmlFor="Completed">Completed</label>
            <input type="checkbox"id="Completed" value="Completed" name="Completed" onChange={handleChange}></input>
            <label htmlFor="favorites">Favorites</label>
            <input type="checkbox" id="favorites" value="favorites" name="favorites" onChange={(handleChange)}></input>
            {/* <select id="filterBy" name="filterBy" multiple onChange={handleChange}>
                <option value="all">All</option>
                <option value="favorites">Favorites</option>
                <option value="notYetStarted">Not Yet Started</option>
                <option value="inProgress">In Progress</option>
                <option value="paused">Paused</option>
                <option value="completed">Completed</option>
            </select> */}
        </div>
    )
}

export default Filters