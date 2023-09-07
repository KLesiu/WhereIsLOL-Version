import React from "react";
import './styles/Gameboard.css'
const Gameboard=(props)=>{
    return(
        <div className="imgHolder">
            <img alt="gameboard" src="./wallpapers/wallpaper.jpg"></img>
            <div id="riven"></div>
            <div id="akali"></div>
            <div id="nocturne"></div>
            <div id="vladimir"></div>
            <div id="ziggs"></div>
        </div>
        
    )
}

export default Gameboard