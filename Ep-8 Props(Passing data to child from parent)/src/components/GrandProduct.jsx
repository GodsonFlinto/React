import PropTypes from 'prop-types'
const GrandProduct = ({deepName = "Vivo", deepPrice = 20000, deepDesc = "100gb"})=>{
    return(
        <section>
            <h3>{ deepName }</h3>
            <p> { deepPrice }</p>
            <p> { deepDesc }</p>
        </section>
    )
}

export default GrandProduct


// GrandProduct.defaultProps = {
//     deepName : "Vivo",
//     deepPrice : 20000,
//     deepDesc : "256gb"
// }
 
// to validate the props types whether it is string or number
GrandProduct.propTypes = {
    deepName : PropTypes.number.isRequired,
    deepPrice : PropTypes.number.isRequired,
    deepDesc : PropTypes.string.isRequired
}
