import { Component } from "react";
import Counter from "./Counter";

class Content extends Component{
    render(){
        return(
            <>
            <div>
                <h1>Count Application</h1>
                <Counter/>
            </div>
            </>
        )
    }
}
export default Content