import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Login from './login/Login'
import Register from './login/Register';

const App = () => {
    const [cart, setCart] = useState([]);

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
    };

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />}/>
            </Routes>
        </Router>
    );
};

export default App;
