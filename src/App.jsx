import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function handleClick(){
    alert("Button Clicked!")
  }
  const handleClick3=()=>{
    alert("Button 3 Clicked!")
  }

  return (
    <>
      <h3>Vite + React</h3>
      <button onClick={handleClick}>Click Me</button>
      <button
        onClick={function handleClick2() {
          alert("Button 2 Clicked!");
        }}
      >
        Click Me2
      </button>
      <button
        onClick={handleClick3}
      >
        Click Me3
      </button>
    </>
  );
}

export default App
