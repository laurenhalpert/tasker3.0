import React, { useState } from "react";

function ToggleSwitch({ progressView, onToggle }){
    

    function handleChange(e){
        progressView === "off"? onToggle("on"): onToggle("off")
    }

    return(
        <span className="toggleSwitch">
            <label id="label" htmlFor="switchLabel">List View</label>
            <label id="switchLabel" className="switch">
                <input id="switch" type="checkbox" onChange={handleChange} value={progressView} />
                <span className="slider round"/>
            </label>
        </span>
    )
}
export default ToggleSwitch;