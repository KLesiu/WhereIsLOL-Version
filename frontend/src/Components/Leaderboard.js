import React, { useEffect, useState } from "react";
import uniqid from 'uniqid'

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
            return setNames(arr)
        })
    }
    useEffect(()=>{
        getLeadeboard()
    },[])
    return(
        <div id="leaderBoard">
            <ul>
            {    
                        names.map((ele)=>{
                          
                            return(
                                <li className="user" key={uniqid()}>
                                    <h3>{ele.name}</h3>
                                    <p>{ele.score}</p>
                                </li>
                            )
                        })
                    }
            </ul>
        </div>
    )
}
export default Leaderboard