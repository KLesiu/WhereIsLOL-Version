import React from "react";
import './styles/PreGame.css'
const PreGame=(props)=>{
    return(
        <div id="preGame">
            <div id="aboutMeHolder">
                <h2>About Me</h2>
            </div>
            <div id="aboutGameHolder">
                <h2>About Game</h2>
                <p className="rules">Your main goal is that you have to find all champions from the list. List with the champion names and photos is at the bottom of the AboutGame section. When you click start button you will see a gameboard. Then you can start your searching. If you find some champion from the list you have to click on it and choose correct from list, if you have a right, clicked champion will be delete from the searching list. If you missed, dont worry you have an infinite number of shoots :D. After searching you will see EndSection where you can check your time and position in ranking! Good Luck!  </p>
                <button id="startButton">START</button>
                <ul className="startList">
                    <li><img src="./champions/Akali.jpg"></img></li>
                    <li><img src="./champions/Nocturne.jpg"></img></li>
                    <li><img src="./champions/Riven.jpg"></img></li>
                    <li><img src="./champions/Vladimir.jpg"></img></li>
                    <li><img src="./champions/Ziggs.jpg"></img></li>
                </ul>
            </div>
        </div>
    )
}
export default PreGame