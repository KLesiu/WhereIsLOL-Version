import React, { useEffect, useState } from "react";
import './styles/Form.css'

const Form=(props)=>{

    return(
        <form method="POST">
            <label htmlFor="name">Your name:</label>
            <input type="text" name="name" id="name"></input>
            <label htmlFor="score">Your score:</label>
            <input type="score" value={6} disabled></input>
            <button type="submit" id="buttonForm">SAVE</button>
        </form>
    )
}
export default Form