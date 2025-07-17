import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Content } from './components/Content'

function App() {
  let user = "Godson"
  let user2 = "Flinto"
  return(
    <>
      <Header user={user}/>
      <Content/>
      <Footer user={user2}/>
    </>
  )
}

export default App
