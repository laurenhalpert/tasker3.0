import React from "react";

function ToggleSwitch(){
    return(
        <span className="toggleSwitch">
            <label id="label" htmlFor="switchLabel">Mode</label>
            <label id="switchLabel" className="switch">
                <input id="switch" type="checkbox"/>
                <span className="slider round"/>
            </label>
        </span>
    )
}
export default ToggleSwitch;