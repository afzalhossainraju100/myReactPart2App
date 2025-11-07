import { useState } from "react"

export default
function Counter(){
    const [count, setCount] = useState(0);
    const counterStyle={
        border: '2px solid blue',
        margin: '20px',
        padding: '20px',
        borderRadius: '10px',
        width: '200px',
        textAlign: 'center'
    }
    return(
        <div style={counterStyle}>
            <h3>Count: {count}</h3>
            <button onClick={() => setCount(count + 1)}>Add</button>
        </div>
    )
}