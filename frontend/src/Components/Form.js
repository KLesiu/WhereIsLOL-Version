import React, { useEffect, useState } from "react";
import Leaderboard from "./Leaderboard";
import './styles/Form.css'

const Form=(props)=>{
    const [errors,setErrors] = useState('')
    const [showBoard,setShowBoard]=useState(false)
    const addScore=async(event)=>{
        event.preventDefault()
        let name = document.querySelector("#name").value
        let score = document.querySelector("#score").value
        const response = await fetch("http://localhost:3001/api/leaderboard/create",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name: name,
                score:score
            })
           })
           if(response.ok){
            setErrors([])
            return setShowBoard(true)
           }
           else{
            if(name===""){
                return setErrors("Name is required")
            }
           }
    }
    useEffect(props.setCount,[])
   
    if(showBoard===true){
        console.log(props.score)
        return(
            <Leaderboard />
        )
    }
    return(
        <form method="POST" onSubmit={addScore}>
            
            <label htmlFor="name">Your name:</label>
            <input type="text" name="name" id="name"></input>
            <label htmlFor="score">Your score:</label>
            <input type="score" value={props.score} id="score" disabled></input>
            <button type="submit" id="buttonForm">SAVE</button>
        </form>
    )
}
export default Form