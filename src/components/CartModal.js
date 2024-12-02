
import React from 'react';


const CartModal = ({ cart, removeFromCart, closeCart }) => {
    return (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
            <div className='bg-white p-6 rounded-lg max-w-md w-full'>
                <h2 className='text-3xl font-bold mb-4'>Your Cart</h2>
                {/* if cart length is 0 display empty message */}
                {cart.length === 0 ? (
                    <p className='text-red-500 text-2xl py-2'>Your cart is empty!!</p>
                ) : (
                    //Fill the cart with product on click of add to cart button
                    cart.map(item => (
                        <div key={item.id} className="flex justify-between items-center mb-4">
                            <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
                            <div>
                                <h3 className="font-bold">{item.title}</h3>
                                <p className='text-lg text-green-700'>${item.price}</p>
                            </div>
                            {/* remove the product from cart on click of remove button */}
                            <button className="bg-red-500 text-white py-1 px-3 rounded-lg border-2 border-gray-500"
                                onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    ))
                )}
                {/* close the cartmodal */}
                <button className="bg-gray-500 text-white py-1 px-3 rounded-lg"
                    onClick={closeCart}>Close X</button>
            </div>
        </div>

    );
};
export default CartModal;