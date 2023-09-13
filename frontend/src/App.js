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

  const getLeaderboard=()=>{
    setShowLeaderboard(true)
   
  }
  const hideLeaderboard=()=>{
    setShowLeaderboard(false)
  }
  useEffect(()=>{
    document.querySelector('#startButton').addEventListener("click",()=>{
      console.log('start')
      setStart(true)
    })
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
        <Form />
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
      <Header start={true}   showLeaderboard={getLeaderboard} />
      <Gameboard />
    </div>
  );
}

export default App;
