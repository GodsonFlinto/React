
import { Fragment } from 'react'
import './App.css'

let author = "Godson"
let isLogged = true

function App() {

  return (
    <Fragment>
      <div>
        <h1 className='head' style={{background: 'green', color: 'white'}}>React Tutorial</h1>
        <label htmlFor="user">Username</label>
        <input type="text" id='user'/>
        <p>Author: { author } </p>
      </div>

      <div>
        { isLogged && <p>Javascript jsx</p> }
      </div>
    </Fragment>
  )
}

export default App
