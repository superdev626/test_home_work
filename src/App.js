import React, { useState } from 'react';
import Menu from './components/Menu';
import Cart from './components/Cart';
import MealSuggestion from './components/MealSuggestion';
import './styles.css';
import menuData from './Alchemy_Menu.json';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((prevCart) => {
      const itemInCart = prevCart.find((cartItem) => cartItem.title === item.title);
      if (itemInCart) {
        return prevCart.map((cartItem) =>
          cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        );
      }
      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (item) => {
    setCart((prevCart) =>
      prevCart
        .map((cartItem) =>
          cartItem.title === item.title ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0)
    );
  };

  return (
    <div className="app">
      <h1>{menuData.restaurant.name}</h1>
      <p>{menuData.restaurant.description}</p>
      <Cart cart={cart} removeFromCart={removeFromCart} />
      <MealSuggestion menu={menuData.menu} />
      <Menu menu={menuData.menu} addToCart={addToCart} />
    </div>
  );
};

export default App;
