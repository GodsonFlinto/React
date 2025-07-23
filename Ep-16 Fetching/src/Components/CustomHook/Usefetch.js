import { useEffect, useState } from "react";
import axios from "axios";

function Usefetch(url) {
  let [products, setProduct] = useState([]);
  let [Error, setError] = useState("");
  let [loading, setIsLoading] = useState(true);

  useEffect(() => {
    let fetchapi = async () => {
      try {
        // let response = await fetch(url);
        // if (response.ok) {
        //   let data = await response.json()
        //   setProduct(data)
        // } else {
        //   throw new Error("Data not found");
        // }

        //axios -> its a library and here we can easily write code for fetching the data 

        let response = await axios.get( url )
        setProduct(response.data)

      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchapi()
  }, []);

  return {products, Error, loading}
}
export default Usefetch;
