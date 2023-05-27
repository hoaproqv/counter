import React, {useState} from 'react'
import './App.css'

function App() {
    const [counter, setCounter] = useState(0)
    const color = counter > 0 ? "green" : counter < 0 ? "red" : "black"
    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }
    const reset = () => {setCounter(0) }
    return (
        <div className="container">
            <h1>Counter</h1>
            <span style={{color}} id='value'>{counter}</span>
            <div className="btn-group">
                <button onClick={decrement} className='btn btn-decrease'>DECREASE</button>
                <button onClick={reset} className='btn btn-reset'>RESET</button>
                <button onClick={increment} className='btn btn-increase'>INCREASE</button>
            </div>
        </div>

    )
}

export default App