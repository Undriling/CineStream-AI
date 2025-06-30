import React, { useState } from "react";

const AddToCart = ({ product = { name: "Sample Product", price: 29.99 } }) => {
    const [cartCount, setCartCount] = useState(0);
    const [added, setAdded] = useState(false);

    const handleAddToCart = () => {
        setCartCount((prevCount) => prevCount + 1);
        setAdded(true);
        setTimeout(() => setAdded(false), 1200);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 to-teal-300 p-4">
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full text-center transition-transform">
                <img
                    src="https://via.placeholder.com/300x180?text=Product+Image"
                    alt={product.name}
                    className="w-full rounded-lg mb-6 object-cover h-44 sm:h-36"
                />
                <h2 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h2>
                <p className="text-lg text-blue-600 mb-6 font-medium">${product.price.toFixed(2)}</p>
                <button
                    className={`w-full py-3 rounded-full font-bold text-white text-base mb-4 transition-all duration-300 shadow-lg
                        ${added
                            ? "bg-gradient-to-r from-cyan-400 to-blue-600 shadow-cyan-200"
                            : "bg-gradient-to-r from-pink-400 to-pink-300 shadow-pink-200"}
                        `}
                    onClick={handleAddToCart}
                >
                    {added ? "Added!" : "Add to Cart"}
                </button>
                <div className="flex items-center justify-center gap-2 text-gray-700 text-base">
                    <span role="img" aria-label="cart" className="text-2xl">🛒</span>
                    <span className="font-bold">{cartCount}</span>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;
