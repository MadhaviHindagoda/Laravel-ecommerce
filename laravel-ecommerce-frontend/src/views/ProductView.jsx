import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStateContext } from '../context/ContextProvider'; // Adjust the import path

const ProductView = () => {
    const { id } = useParams(); // Get the product ID from the URL
    const { products, addToCart } = useStateContext(); // Access the context
    const navigate = useNavigate(); // For navigation

    // Find the product with the matching ID
    const product = products.find(product => product.id === parseInt(id));

    if (!product) {
        return <div>Product not found.</div>; // Handle case where product is not found
    }

    const handleAddToCart = () => {
        addToCart(product); // Add the product to the cart
        navigate('/product'); // Navigate back to the product listing or cart
        alert(`${product.name} added to cart!`)
    };

    const handleCancel = () => {
        navigate('/product'); // Navigate back to the product listing
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover mb-4"
            />
            <p className="text-lg mb-2">{product.description}</p>
            <p className="text-lg mb-2">{product.about}</p>

            <p className="text-xl font-bold">${product.price.toFixed(2)}</p>

            <div className="mt-4">
                <button onClick={handleAddToCart} className="bg-blue-500 text-white px-4 py-2 rounded mr-2">
                    Add to Cart
                </button>
                <button onClick={handleCancel} className="bg-gray-500 text-white px-4 py-2 rounded">
                    Cancel
                </button>
            </div>
        </div>
    );
};

export default ProductView;
