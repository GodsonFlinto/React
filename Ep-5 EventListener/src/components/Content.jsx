import React from 'react'
import styled from 'styled-components'

//styled using styled-compomnent library
    let Button = styled.button
    `
    background-color : blue;
    color : white;
    width : 100px;
    height : 50px
    `
    //extending from the above style for reusability
    let NewButton = styled(Button)
    `
    background-color : green;
    box-shadow : 10px 10px 5px black
    `
export const Content = () => {
    let Style = {
        backgroundColor : "red",
        color : "white",
        boxShadow : "10px 10px 5px black"
    }
    function print(e) {
        console.log(e.target.innerText)
        console.log("Hello")
      }
      function print1(user) {
        console.log(user)
      }
  return (
    <main>
        <h1 style={ Style }>Content</h1>
        {/* //e: is the event object passed automatically by React when the button is clicked.

                    e.target.innerText: gives the text inside the button, which is "Click me!". */}
        <Button onClick={ print }>Click me!</Button>

        {/* Why Use ()=>print1("Godson") Instead of onClick={print1("Godson")}?
            Because print1("Godson") would execute immediately during render.
            Wrapping it inside an anonymous arrow function () => print1("Godson") ensures it runs only when clicked. */}
        <NewButton onClick={()=>{print1("Godson")}}>Duplicate</NewButton>
    </main>
  )
}
