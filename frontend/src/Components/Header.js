import React, { useEffect } from 'react'
import './styles/Header.css'
const Header=(props)=>{
   useEffect(()=>{
    const images=document.querySelectorAll(".champion")
    images.forEach((ele)=>{
        ele.addEventListener("click",()=>{
            ele.classList.toggle('rotate')
            const h3 = ele.parentElement.children[0]
            
            h3.classList.toggle('show')
            
        })
    })
   })
    if(props.start===true){
        return(
            <header>
                <h1>WhereIs Champion?</h1>
                <button id="leaderboardButton">Leaderboard</button>
                <ul className="championsBasket">
                    <li><div className='glass'> <h3 className=''>Akali</h3><img className='champion' src="./champions/Akali.jpg">
                        </img></div>
                        </li>
                    <li><div className='glass'> <h3 className=''>Nocturne</h3>  <img className='champion' src="./champions/Nocturne.jpg"></img></div>
                       </li>
                    <li><div className='glass'> <h3 className=''>Riven </h3><img className='champion' src="./champions/Riven.jpg"></img></div>
                        </li>
                    <li><div className='glass'><h3 className=''>Vladimir</h3> <img className='champion' src="./champions/Vladimir.jpg"></img> </div>
                        </li>
                    <li><div className='glass'> <h3 className=''>Ziggs</h3> <img className='champion' src="./champions/Ziggs.jpg"></img></div>
                        </li>
                </ul>
            </header>
        )
    }
    return(
        <header>
            <h1>WhereIs Champion?</h1>
            <button id='leaderboardButton'>Leaderboard</button>
        </header>
    )
}

export default Header