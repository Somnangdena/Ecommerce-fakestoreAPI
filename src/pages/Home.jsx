import { useContext } from "react";
import { ProductContext } from "../contexts/ProductContext";



const Home = () => {
  // get product from product context 
  const { products } = useContext(ProductContext);
  return (
    <div>Home</div>
  )
}

export default Home