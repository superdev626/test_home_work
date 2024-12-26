import React from 'react';

const Cart = ({ cart, removeFromCart }) => (
  <div className="cart">
    <h2>Your Cart</h2>
    {cart.length === 0 ? (
      <p>Your cart is empty.</p>
    ) : (
      <ul>
        {cart.map((item) => (
          <li key={item.title}>
            <span>{item.title} (x{item.quantity})</span>
            <span>${(item.price * item.quantity) / 100}</span>
            <button className="remove-item" onClick={() => removeFromCart(item)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    )}
    <div className="total">
      <h3>Total: ${(cart.reduce((total, item) => total + item.price * item.quantity, 0) / 100).toFixed(2)}</h3>
    </div>
  </div>
);

export default Cart;
