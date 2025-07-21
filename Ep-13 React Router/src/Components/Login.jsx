import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Login = () => {
  //Route Parameter -> Getting the name from the link to display in login page using useParams hook.
  let {name} = useParams();
  //console.log(name);

  let nav = useNavigate();

  let handleNavigate = () =>{
    nav("/")
  }

  return (
    <div>
        Login - {name}
        <button onClick={ handleNavigate }>Move to Home</button>
    </div>
    
  )
}

export default Login