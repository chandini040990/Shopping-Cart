import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import CartModal from './components/CartModal';
import { useCart } from './hooks/useCart';
import './App.css';

const App = () => {
  //usestate and useeffect for cartmodal
  const { cart, addToCart, removeFromCart } = useCart();

  //initially set cartopen to false 
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <div>

        {/* Pass cart count and open cart props and set open cart to true to open modal*/}
        <Navbar cartCount={cart.length} openCart={() => setIsCartOpen(true)} />

        {/* roduct list to fetch nd display on page */}
        <ProductList addToCart={addToCart} />

        {/* Cartmodal to diaplay cart items,remove items and close the modal */}
        {isCartOpen && (
          <CartModal cart={cart} removeFromCart={removeFromCart} closeCart={() => setIsCartOpen(false)} />
        )}


      </div>
    </>
  );

};

export default App;
