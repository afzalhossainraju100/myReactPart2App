import { useState } from "react"

export default function Batsman(){
    const [runs,setRuns]= useState(0);

    const handleRuns=(run)=>{
        setRuns(runs + run);
    }

    const BatsmanStyle={
            border: '2px solid green',
            margin: '20px',
            padding: '20px',
            borderRadius: '10px',
            width: '200px',
            textAlign: 'center'
        }
    return (
      <div style={BatsmanStyle}>
        <h3>Player: Bangle Tiger</h3>
        {
            runs>50 && <p>Your Score 50</p>
        }
        <h2>Score:{runs} </h2>
        <button onClick={()=>{handleRuns(1)}}>Single</button>
        <button onClick={()=>{handleRuns(2)}}>Double</button>
        <button onClick={()=>{handleRuns(4)}}>Four</button>
        <button onClick={()=>{handleRuns(6)}}>Six</button>
      </div>
    );
}