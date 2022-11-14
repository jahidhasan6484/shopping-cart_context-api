import { useContext } from "react";
import { CartContext } from "../../App";

const Products = ({ product }) => {
    const [cartItems, setCartItems, productsItems] = useContext(CartContext);

    const handleAddToCart = (product) => {
        const productExist = cartItems.find((item) => item.id === product.id);

        if (productExist) {
            setCartItems(
                cartItems.map((item) => item.id === product.id ? {
                    ...productExist, quantity: productExist.quantity + 1
                } : item
                )
            )
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }])
        }
    }

    return (
        <div className="col-md-3">
            <div className="card m-2 p-2">
                <p>{product.name}</p>
                <p>{product.price}</p>
                <button className="btn btn-dark" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Products;