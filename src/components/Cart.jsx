import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty</p>
    ) : (
      <>
        <ul>
          {cart.map((item) => (
            <li key={item.title}>
              {item.title} - ${((item.price * item.quantity) / 100).toFixed(2)} (x{item.quantity})
              <button onClick={() => removeFromCart(item)}>Remove</button>
            </li>
          ))}
        </ul>
        <h3>
          Total: $
          {cart.reduce((total, item) => total + item.price * item.quantity, 0) / 100}
        </h3>
      </>
    )}
  </div>
);

export default Cart;
