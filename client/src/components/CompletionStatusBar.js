import React from "react";

function CompletionStatusBar ({ progressStatus }){
   
    
    
    return(
        <div className="completionStatusBar">
            <label htmlFor="file" className="progressBar">Completion Progress: </label>
            <progress id="file" value={progressStatus} max="100">{progressStatus} %</progress>
        </div>
    )
}
export default CompletionStatusBar;