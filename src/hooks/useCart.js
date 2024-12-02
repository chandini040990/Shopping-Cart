import { useState } from 'react';

export const useCart = () => {
    //set initial state of cart
    const [cart, setCart] = useState([]);

    // Add items to cart on add button click
    const addToCart = (product) => {
        const isAlreadyInCart = cart.some(item => item.id === product.id);
        if (isAlreadyInCart) {
            alert("Item already added to the cart");
            return;
        }
        setCart([...cart, product]);
    };
    //remove product on remove button click
    const removeFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));

    };

    return { cart, addToCart, removeFromCart };
};