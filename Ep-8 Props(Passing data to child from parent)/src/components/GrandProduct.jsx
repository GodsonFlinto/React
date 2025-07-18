const GrandProduct = ({deepName, deepPrice, deepDesc})=>{
    return(
        <section>
            <h3>{ deepName }</h3>
            <p> { deepPrice }</p>
            <p> { deepDesc }</p>
        </section>
    )
}
export default GrandProduct