import React from 'react';
import './pagescss/Cart.css';
import Navbar from '../components/Navbar';

const Cart = ({ cart, removeFromCart }) => {
    // Calculate the total price of all products in the cart
    const totalPrice = cart.reduce((total, product) => {
        return total + parseFloat(product.price);
    }, 0);

    return (
        <div className="nav">
        <Navbar />
        <div className="cart-container">
            <h1>Cart</h1>
            <div className="cart-items">
                {cart.length === 0 ? (
                    <div>Your cart is empty</div>
                ) : (
                    cart.map(product => (
                        <div key={product.id} className="cart-item">
                            <img src={product.imageUrl} alt={product.name} />
                            <div>
                                <h3>{product.name}</h3>
                                <p>PHP {product.price}</p>
                                <button onClick={() => removeFromCart(product.id)}>Delete</button>
                            </div>
                        </div>
                    ))
                )}
            </div>
            </div>
            {cart.length > 0 && (
                <div className="cart-summary">
                    <h2>Total Price: PHP {totalPrice.toFixed(2)}</h2>
                </div>
            )}
        </div>
    );
};

export default Cart;
