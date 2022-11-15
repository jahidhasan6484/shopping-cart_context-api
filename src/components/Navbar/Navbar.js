import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../App';

const Navbar = () => {
    const [cart, setCart, productsItems] = useContext(CartContext);

    const cartTotal = () => {
        return cart.reduce(function (acc, obj) { return acc + obj.price * obj.quantity; }, 0);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <Link to="/" className="navbar-brand" href="#">E-commarce</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                    </ul>
                    <div className="d-flex gap-2">
                        <button className='btn btn-outline-dark'>৳ {cartTotal()} taka</button>
                        <Link to="/cart">
                            <button className="btn btn-outline-success" type="submit">Cart {cart.length}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;