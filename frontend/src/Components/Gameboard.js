import React, { useEffect, useState } from "react";
import './styles/Gameboard.css'

const Gameboard=(props)=>{
   
    useEffect(()=>{
        const divs = document.querySelectorAll(".champOnTheBoard")
        divs.forEach((element)=>{
                   const changing=(e)=>{
                   
                        const picked = document.querySelector(`.${e.target.id}`)
                        picked.style="opacity:0.2;"
                        picked.classList.add('correct')
                        element.classList.add('clicked')
                        window.scrollTo(0,0)
                        element.removeEventListener("click",changing)
                    
                   
                  
                   
                   
                    
                }
                    element.addEventListener("click",changing)
                
              
            
            
        })
    },[])
    return(
        <div className="imgHolder">
            <img id="imageBoard"  alt="gameboard" src="./wallpapers/wallpaper.jpg"></img>
            <a target="_blank" href="https://www.wallpaperuse.com/vien/ohxRxm/">Wallpaper source</a>
            <div className="champOnTheBoard"  id="riven"></div>
            <div className="champOnTheBoard" id="akali"></div>
            <div className="champOnTheBoard" id="nocturne"></div>
            <div className="champOnTheBoard" id="vladimir"></div>
            <div className="champOnTheBoard" id="ziggs"></div>
         
        </div>
        
    )
}

export default Gameboard