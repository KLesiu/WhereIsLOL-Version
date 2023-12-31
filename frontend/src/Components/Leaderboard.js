import React, { useEffect, useState } from "react";
import uniqid from 'uniqid'
import './styles/Leaderboard.css'

const Leaderboard=(props)=>{
    const [names,setNames]=useState([])
    const getLeadeboard=async()=>{
        const response = await fetch('http://localhost:3001/api/leaderboard').then(function(ele){
            return ele.json()
        }).then((data)=>{
            const arr = []
            
            
            data.map((ele)=>{
                arr.push(ele)
                
            })
           
            
            return setNames(sortedLowToHigh(arr))
        })
    }
    const sortedLowToHigh=(players)=>{
        return players.sort((a,b)=>{
            return a.score - b.score
        })
    }
    useEffect(()=>{
        getLeadeboard()

    },[])
    return(
        <div id="leaderBoard">
            <h2>Leaderboard</h2>
            <ol>
            {    
                        names.map((ele)=>{
                          
                            return(
                                <li className="user" key={uniqid()}>
                                    <h3>{ele.name}</h3>
                                    <p>Score: {ele.score}</p>
                                </li>
                            )
                        })
                    }
            </ol>
        </div>
    )
}
export default Leaderboard