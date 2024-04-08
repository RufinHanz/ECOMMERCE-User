import React, { useState, useEffect } from 'react';
import { firestore } from '../database/firebase';
import { ShoppingCart } from 'phosphor-react';
import './pagescss/Shop.css';
import Navbar from '../components/Navbar';

const Shop = ({ setCart }) => {
    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const productsCollection = await firestore.collection('products').get();
                const fetchedProducts = productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        fetchProducts();
    }, []);

    const addToCart = (productId) => {
        const productToAdd = products.find(product => product.id === productId);
        if (productToAdd) {
            setCart(prevCart => [...prevCart, productToAdd]);
        }
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
    };

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="nav">
        <Navbar />
        <div className="shop-container">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchTerm}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div className="products-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-container">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>PHP{product.price}</p>
                        <button onClick={() => addToCart(product.id)}>
                            <ShoppingCart /> Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
