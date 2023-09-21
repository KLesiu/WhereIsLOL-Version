import Gameboard from './Components/Gameboard';
import Header from './Components/Header';
import PreGame from './Components/PreGame';
import Form from './Components/Form';
import './index.css';
import { useState, useEffect } from 'react';
import Leaderboard from './Components/Leaderboard';
function App() {
  const [start,setStart]=useState(false)
  const [finish,setFinish]=useState(0)
  const [pickedChampions,setPickedChampions]=useState([])
  const [showLeaderboard,setShowLeaderboard]=useState(false)
  const [score,setScore]=useState(0)
  const [intervalId,setIntervalId]=useState(null)

  const increment = ()=>{
    setScore(oldScore=>oldScore+1)
  }
  const onClickStart=()=>{
    
    if(intervalId===null){

      setIntervalId(setInterval(increment,1000))
    }
  }
  const onClickStop=()=>{
    
    clearInterval(intervalId)
    setIntervalId(null)
  }

  const getLeaderboard=()=>{
    setShowLeaderboard(true)
   
  }
  
  useEffect(()=>{
    document.querySelector('#startButton').addEventListener("click",()=>{
      
      setStart(true)
    })
  },[])
  useEffect(()=>{
    document.querySelector('#startButton').addEventListener("click",onClickStart)
  },[])
  useEffect(()=>{
    const divsChamp = document.querySelectorAll(".champOnTheBoard")
    if(finish !==5){
      divsChamp.forEach((ele)=>{
        ele.addEventListener("click",()=>{
         if(document.querySelector(`.${ele.id}`)){
          if(document.querySelector(`.${ele.id}`).classList.contains('correct')){
            
            if(pickedChampions.includes(ele.id)){
              return 
            }
            setPickedChampions([...pickedChampions,ele.id])
            setFinish(()=>{
              if(pickedChampions.includes(ele.id)
                
              ){
                return finish
              }else{
                return finish+1
              }
            })
           
           }
         }else{
          return
         }
       
        })
      })
    }
   
  })
  if(showLeaderboard===true){
    return(
      <div className='App'>
        
        <Header start={false}  showLeaderboard={getLeaderboard} />
        <Leaderboard />
      </div>
    )
  }
  if(finish===5){
    
    return(
      <div className='App'>
        <Header start={false}   showLeaderboard={getLeaderboard} />
        <Form setCount={onClickStop} score={score} />
      </div>
 
    )
  }
  if(start===false){
    return(
      <div className='App'>
        
        <Header start={false}   showLeaderboard={getLeaderboard}/>
        <PreGame />
      </div>
    )
  }
  return (
    <div className="App">
    
      <Header start={true} score={score}   showLeaderboard={getLeaderboard} />
      <Gameboard />
    </div>
  );
}

export default App;
