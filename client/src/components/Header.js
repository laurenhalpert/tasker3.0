import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function Header ({ progressView, onToggle }){

    return(
        <header className="header">
            <h1 id="siteTitle">Tasker</h1>
            <ToggleSwitch progressView={progressView} onToggle={onToggle}/>
        </header>
    )
}
export default Header;
