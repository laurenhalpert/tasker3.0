import React from 'react';
import ToggleSwitch from './ToggleSwitch';

function Header (){
    return(
        <header className="header">
            <h1 id="siteTitle">Tasker</h1>
            <ToggleSwitch />
        </header>
    )
}
export default Header;
