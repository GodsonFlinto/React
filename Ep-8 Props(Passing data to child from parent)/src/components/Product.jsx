import GrandProduct from "./grandProduct";
function Product({ product }) {
  //destructuring it in the parameter itself
  //let {product} = props  //destructing
  console.log(product);
  return (
    <>
      <div>
        <h3>Displaying products</h3>
        <section>
          <h2>{product.name}</h2>
          <p> {product.price}</p>
          <p> {product.desc} </p>
        </section>
        <GrandProduct
          deepName={product.name}
          deepPrice={product.price}
          deepDesc={product.desc}
        />
      </div>
    </>
  );
}
export default Product;
