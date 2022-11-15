import { useContext, useState } from "react";
import { CartContext } from "../../App";

const Products = ({ product }) => {
    const [cart, setCart, productsItems] = useContext(CartContext);

    const handleAddToCart = (product) => {
        const productExist = cart.find((item) => item.id === product.id);

        if(productExist) {
            alert("Already added to the cart")
        } else {
            let tempCart = [...cart]
            tempCart.push(product)
            localStorage.setItem("cart", JSON.stringify(tempCart))
         
            setCart(tempCart)
        }
    }

    return (
        <div className="col-md-3">
            <div className="card m-2 p-2">
                <p>{product.name}</p>
                <p>Price: ৳ {product.price}</p>
                <button className="btn btn-dark" onClick={() => handleAddToCart(product)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Products;