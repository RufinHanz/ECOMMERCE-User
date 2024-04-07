import React, { useState, useEffect } from 'react';
import { firestore } from '../database/firebase';
import './Pages.css'

const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Function to fetch products from Firestore
        const fetchProducts = async () => {
            try {
                const productsCollection = await firestore.collection('products').get();
                const fetchedProducts = productsCollection.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setProducts(fetchedProducts);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };

        // Call fetchProducts function
        fetchProducts();
    }, []);

    const addToCart = (productId) => {
        // Implement your add to cart logic here
        console.log(`Product added to cart: ${productId}`);
    };

    return (
        <div className="shop-container">
            <h1>Shop</h1>
            <div className="products-grid">
                {products.map(product => (
                    <div key={product.id} className="product-container">
                        <img src={product.imageUrl} alt={product.name} />
                        <h3>{product.name}</h3>
                        <p>${product.price}</p>
                        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;
