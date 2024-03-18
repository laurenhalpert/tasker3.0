import React from "react";

function CompletionStatusBar (){
    return(
        <div className="completionStatusBar">
            <label htmlFor="file" className="progressBar">Progress: </label>
            <progress id="file" value="32" max="100"> 32% </progress>
        </div>
    )
}
export default CompletionStatusBar;