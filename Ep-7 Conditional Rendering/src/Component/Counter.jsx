import { useState } from "react"

function Counter(){
    let [count, setCount] = useState(0)
    let message

    function IncCount(){
        return setCount( (prevCount)=> prevCount+1 )
    }

    let remCount = 10-count
    if (count<10) {
                message = (
                    <div>
                        <h1>You have clicked {count} times.</h1>
                        <p>You have {remCount} clicks to get the coupon </p>
                    </div>
                )
            }
    else if(count===10){
        message = (
            <div>
                <h1>You have clicked {count} times.</h1>
                <p>Congragulations! you have achieved a coupon</p>
            </div>
        )
    }
    else if(count>10 && count<20){
        message = (
            <div>
                <h1>You have clicked {count} times.</h1>
                <p>You have to click {20-count} clicks to get 20% cashback</p>
            </div>
        )
    }
    else{
        message = (
            <div>
                <h1>You have clicked {count} times.</h1>
                <p>You are a master.</p>
            </div>
        )
    }
    let [data, setData] = useState("Failure")

    let displayComp = ()=>{
        switch (data) {
            case("Loading"):
                return <LoadingComp/>
                break;
            case("Failure"):
                return <FailureComp/>
                break;
            case("Success"):
                return <SuccessComp/>
                break;
            default:
                break;
    }
    }


    return(
        <>
        <div>
            <h1>Counter App - {count}</h1>
            <button onClick={IncCount} style={{color:"white"}}>Click Me</button>
            {message}
            {displayComp()}
        </div>
        </>
    )
}
export default Counter

function LoadingComp(){
    return(
        <h3>Loading...</h3>
    )
}

function SuccessComp(){
    return(
        <h3>Success...❤️</h3>
    )
}

function FailureComp(){
    return(
        <h3>Failure...😒</h3>
    )
}