import React, { useEffect } from 'react'
import './styles/Header.css'
const Header=(props)=>{
   useEffect(()=>{
    
   })
    if(props.start===true){
        return(
            <header>
                <h1>WhereIs Champion?</h1>
                <button id="leaderboardButton">Leaderboard</button>
                <ul className="championsBasket">
                    <li><div className='glass'> <h3 className='hidden'>Akali</h3><img className='champion' src="./champions/Akali.jpg">
                        </img></div>
                        </li>
                    <li><div className='glass'> <h3 className='hidden'>Nocturne</h3>  <img className='champion' src="./champions/Nocturne.jpg"></img></div>
                       </li>
                    <li><div className='glass'> <h3 className='hidden'>Riven </h3><img className='champion' src="./champions/Riven.jpg"></img></div>
                        </li>
                    <li><div className='glass'><h3 className='hidden'>Vladimir</h3> <img className='champion' src="./champions/Vladimir.jpg"></img> </div>
                        </li>
                    <li><div className='glass'> <h3 className='hidden'>Ziggs</h3> <img className='champion' src="./champions/Ziggs.jpg"></img></div>
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