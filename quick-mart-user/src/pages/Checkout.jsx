import React, { useState } from 'react';
import './pagescss/Checkout.css';

const Checkout = ({ cart, totalPrice }) => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleCheckout = () => {
        if (!phoneNumber || !address || !email) {
            setError('Please fill in all fields.');
            return;
        }

        // Proceed with payment
        // Add your payment logic here
    };

    if (!cart) {
        return <div>Loading...</div>; // or any other fallback UI
    }

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            <div className="cart-summary">
                <h3>Cart Summary</h3>
                {cart.map(product => (
                    <div key={product.id} className="cart-item">
                        <span>{product.name}</span>
                        <span>PHP {product.price}</span>
                    </div>
                ))}
                <div className="total-price">Total Price: PHP {totalPrice.toFixed(2)}</div>
            </div>
            <div className="checkout-form">
                <input
                    type="text"
                    placeholder="Phone Number"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {error && <p className="error-message">{error}</p>}
                <button onClick={handleCheckout}>Complete Payment</button>
            </div>
        </div>
    );
};

export default Checkout;
