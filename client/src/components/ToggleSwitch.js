import React, { useState } from "react";

function ToggleSwitch(){
    const [isDarkMode, setIsDarkMode] = useState("off")

    function handleChange(e){
        isDarkMode === "off"? setIsDarkMode("on"): setIsDarkMode("off")
    }

    return(
        <span className="toggleSwitch">
            <label id="label" htmlFor="switchLabel">Dark Mode</label>
            <label id="switchLabel" className="switch">
                <input id="switch" type="checkbox" onChange={handleChange} value={isDarkMode} />
                <span className="slider round"/>
            </label>
        </span>
    )
}
export default ToggleSwitch;