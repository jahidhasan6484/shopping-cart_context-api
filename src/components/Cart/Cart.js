import { useContext } from "react";
import { CartContext } from "../../App";

const Cart = () => {
    const [cart, setCart, productsItems] = useContext(CartContext);

    const cartTotal = () => {
        return cart.reduce(function (acc, obj) { return acc + obj.price * obj.quantity; }, 0);
    }

    const itemIncrease = (_id) => {
        console.log(_id)
    }

    const itemDecrease = (_id) => {
        console.log(_id)
    }

    return (
        <div className="container">
            <h1>Cart</h1>

            {
                cart.length > 0 &&
                <div className="row">
                    <p className="col-md-2 col-2 first">Name</p>
                    <p className="col-md-2 col-4 second">Price</p>
                    <p className="col-md-5 col-4 third">Quantity</p>
                    <p className="col-md-3 col-2 fourth">Total</p>
                </div>
            }

            {
                cart.length > 0 ? <>
                    {
                        cart.map((cartItem) => {
                            return (
                                <div className="row" key={cartItem.id}>
                                    <p className="col-md-2 col-2 first">{cartItem.name}</p>
                                    <p className="col-md-2 col-4 second">{cartItem.price}</p>
                                    <p className="col-md-5 col-4 third">
                                        <svg onClick={() => itemDecrease(cartItem.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-dash-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z" />
                                        </svg>
                                        {cartItem?.quantity}
                                        <svg onClick={() => itemIncrease(cartItem.id)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-lg" viewBox="0 0 16 16">
                                            <path fillRule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z" />
                                        </svg>
                                    </p>
                                    <p className="col-md-3 col-2 fourth">{cartItem.price * cartItem.quantity}</p>
                                </div>
                            )
                        })
                    }
                    <p className="total">Total Payable : {cartTotal()}</p>
                </> : "Cart is empty"
            }
        </div>
    )
}

export default Cart;