import Gameboard from './Components/Gameboard';
import Header from './Components/Header';
import PreGame from './Components/PreGame';
import './index.css';
import { useState } from 'react';
function App() {
  const [start,setStart]=useState(false)
  if(start===false){
    return(
      <div className='App'>
        <Header/>
        <PreGame />
      </div>
    )
  }
  return (
    <div className="App">
      <Header />
      <Gameboard />
    </div>
  );
}

export default App;
