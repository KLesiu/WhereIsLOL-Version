import Gameboard from './Components/Gameboard';
import Header from './Components/Header';
import PreGame from './Components/PreGame';
import './index.css';
import { useState, useEffect } from 'react';
function App() {
  const [start,setStart]=useState(false)
  useEffect(()=>{
    document.querySelector('#startButton').addEventListener("click",()=>{
      setStart(true)
    })
  },[])
  if(start===false){
    return(
      <div className='App'>
        <Header start={false}/>
        <PreGame />
      </div>
    )
  }
  return (
    <div className="App">
      <Header start={true} />
      <Gameboard />
    </div>
  );
}

export default App;
