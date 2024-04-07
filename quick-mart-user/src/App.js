import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Logout from './pages/Logout';

const App = () => {
    const [cart, setCart] = useState([]);

    // Function to remove a product from the cart
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(product => product.id !== productId);
        setCart(updatedCart);
    };

    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/shop" element={<Shop cart={cart} setCart={setCart} />} />
                <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />}/>
                <Route path="/logout" element={<Logout />} />
            </Routes>
        </Router>
    );
};

export default App;
