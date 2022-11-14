import { useContext } from "react";
import { CartContext } from "../../App";

const Cart = () => {
    const [cartItems, setCartItems, productsItems] = useContext(CartContext);

    return (
        <div className="container">
            <h1>Cart</h1>

            {
                cartItems.length > 0 ? <>
                    {
                        cartItems.map((cartItem)=> {
                            return (
                                <div key={cartItem.id}>
                                <p>{cartItem.name}</p>
                                <p>{cartItem.price}</p>
                                <p>{cartItem.quantity}</p>
                                </div>
                            )
                        })
                    }
                </> : "Cart is empty"
            }
        </div>
    )
}

export default Cart;