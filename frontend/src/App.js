import Gameboard from './Components/Gameboard';
import Header from './Components/Header';
import PreGame from './Components/PreGame';
import './index.css';
import { useState, useEffect } from 'react';
function App() {
  const [start,setStart]=useState(false)
  const [finish,setFinish]=useState(0)
  const [pickedChampions,setPickedChampions]=useState([])
  useEffect(()=>{
    document.querySelector('#startButton').addEventListener("click",()=>{
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
  if(finish===5){
    console.log(finish)
    return(
      <h2>hello</h2>
    )
  }
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
