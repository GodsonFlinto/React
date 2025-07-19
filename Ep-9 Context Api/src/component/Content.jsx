import { useContext } from "react"
import { Context } from "../App"

function Content(){
    let {user} = useContext(Context)
    return (
        <>
        <main>
            Good Morning - {user.name}
            Age - {user.age}
        </main>
        </>
    )
}

export default Content