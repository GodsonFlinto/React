import { useContext } from "react";
import { Context } from "../App";

function Header(){
    let {user : {name}} = useContext(Context)
    return(
        <>
            <header>
                <h1>ToDo list</h1>
                <p>{name.slice(0,1)}</p>
            </header>
        </>
    )
}
export default Header;