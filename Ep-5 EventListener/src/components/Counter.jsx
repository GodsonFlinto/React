import { useState } from "react"

function Counter(){
    let arr = [1,2]
    let [a,b] = arr  //destructuring
    //console.log(a,b)

    let [count, setCount] = useState(0)  //same format as destructuring
//     count is the state variable
//     setCount is the function to update it

    function CountInc(){
        // setCount(count+1)
        setCount( (prevCount)=>{return prevCount+1} )
        setCount( (prevCount)=>{return prevCount+1} )
//         setCount(count + 1) might not work correctly when calling it multiple times synchronously because count doesn’t update immediately.
//         setCount(prev => prev + 1) ensures correct value each time using the function form.
    }
    function CountDec(){
        // setCount(count-1)
        setCount( (prevCount)=> prevCount-1 )
        setCount( (prevCount)=> prevCount-1 )
    }

    function func(){
        return 100
    }
    // using function as initial value inside usestate
    let [sample, setSample] = useState( ()=>{ return func()} )
    return (
        <>
        <div>
            <h1>Counter Application - {count} - {sample}</h1>
            <button onClick={CountInc}>Increase</button>
            <button onClick={CountDec}>Decrease</button>
        </div>
        </>
    )
}
export default Counter