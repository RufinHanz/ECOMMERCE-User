import React from 'react';
import { Link } from 'react-router-dom';
import { Storefront, ShoppingCart, SignOut } from 'phosphor-react'; // Import icons from Phosphor React
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="links">
                <Link to="/shop"><Storefront size={24} /> Shop</Link>
                <Link to="/cart"><ShoppingCart size={24} /> Cart</Link>
            </div>
            <div className="logout">
                <Link to="/logout"><SignOut size={24} /> Logout</Link>
            </div>
        </div>
    );
};

export default Navbar;
