
import React from 'react';


const Navbar = ({ cartCount, openCart }) => {
    return (
        <div>
            {/* Navbar display header and cart with cart count*/}
            <nav className="navbar flex justify-between p-10 bg-sky-500">
                <span className="mb-0 text-6xl font-bold">Shopping Website</span>
                <button className="btn" onClick={openCart}>
                    <span>({cartCount})<img src="images/cart.png" alt="cart" width="40" height="40" /></span> </button>
            </nav>
        </div >
    );
};

export default Navbar;




