import { useContext } from "react";
import { CartContext } from "../../App";
import Products from "../Products/Products";

const Home = () => {
    const [cartItems, setCartItems, productsItems] = useContext(CartContext);

    return (
        <div className="container">
            <div className="row mb-5">
                {
                    productsItems.map((product) => <Products key={product.id} product={product}/>)
                }
            </div>
        </div>
    )
}

export default Home;