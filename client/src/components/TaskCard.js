import React from "react";

function TaskCard ({task}){
    return(
        <tr className="taskCard">
            <td>{task.taskName}</td>
        </tr>
    )
}

export default TaskCard