import React from 'react'
import styled from 'styled-components'

export const Content = () => {
    let Style = {
        backgroundColor : "red",
        color : "white",
        boxShadow : "10px 10px 5px black"
    }
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
  return (
    <main>
        <h1 style={ Style }>Content</h1>
        <Button>Click me!</Button>
        <NewButton>Duplicate</NewButton>
    </main>
  )
}
