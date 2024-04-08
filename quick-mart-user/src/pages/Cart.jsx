import React, { useState } from 'react';
import './pagescss/Cart.css';
import Navbar from '../components/Navbar';

const Cart = ({ cart, removeFromCart }) => {
    const [checkoutMessage, setCheckoutMessage] = useState('');
    const [redirectMessage, setRedirectMessage] = useState(false);

    // Calculate the total price of all products in the cart
    const totalPrice = cart.reduce((total, product) => {
        return total + parseFloat(product.price);
    }, 0);

    const handleCheckout = () => {
        // Simulate payment processing
        setCheckoutMessage('Processing payment...');
        setTimeout(() => {
            setCheckoutMessage('Payment Successful!');
            setTimeout(() => {
                setRedirectMessage(true);
                // Redirect to Shop page after 2 seconds
                setTimeout(() => {
                    window.location.href = '/shop';
                }, 2000);
            }, 2000); // Set redirect message after 2 seconds
        }, 2000); // Show "Payment Successful!" message after 2 seconds
    };

    return (
        <div className="nav">
            <Navbar />
            <div className="cart-container">
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="cart-empty">Your cart is empty!</div>
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
                {cart.length > 0 && (
                    <div className="cart-summary">
                        <h2>Total Price: PHP {totalPrice.toFixed(2)}</h2>
                        <button className="checkout-button" onClick={handleCheckout}>Buy Products</button>
                    </div>
                )}
            </div>
            {checkoutMessage && <PopupMessage message={checkoutMessage} />}
            {redirectMessage && <PopupMessage message="Redirecting to Shop..." />}
        </div>
    );
};

const PopupMessage = ({ message }) => {
    return (
        <div className="popup">
            <p>{message}</p>
        </div>
    );
};

export default Cart;
