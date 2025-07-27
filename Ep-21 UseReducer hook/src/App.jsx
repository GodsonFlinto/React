import { act, useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  let counter_action = {
    Increment : "increment",
    Decrement : "decrement",
    Reset : "reset"
  }
  let reducer = (state, action) =>{
    console.log(action)
    switch(action.type){
      case counter_action.Increment:
        return { ...state, count : state.count+1 }
      case counter_action.Decrement:
        return { ...state, count : state.count-1 }
      case counter_action.Reset:
        return { ...state, count : 0 }
      default:
        return {state}
    }

  }
  let [state , dispatch] = useReducer( reducer , { count : 0 }  )
  //console.log(state, dispatch);
  

  return (
    <>
      <h1>UseReducer Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {state.count}
        </button>
      </div>
      <div className="card">
        <button onClick={() => dispatch({ type : counter_action.Increment })}>
          Increment 
        </button>
        <button onClick={() => dispatch({ type : counter_action.Decrement })}>
          Decrement 
        </button>
        <button onClick={() => dispatch( {type : counter_action.Reset} )}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
