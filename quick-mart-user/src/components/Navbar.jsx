import React from 'react';
import { Link } from 'react-router-dom';
import { Storefront, ShoppingCart, SignOut } from 'phosphor-react'; // Import icons from Phosphor React
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="Navbar">
            <div className="WebName">
                QuickMart
            </div>
            <div className="logout-login">
                <Link to="/shop"><Storefront size={24} /> Shop </Link>
                <Link to="/cart"><ShoppingCart size={24} /> Cart </Link>
                 <Link to="/login"><SignOut size={24} /> Log Out </Link>
            </div>
        </div>
    );
};

export default Navbar;
