import React from 'react';

const Menu = ({ menu, addToCart }) => (
  <div className="menu">
    {menu.map((category) => (
      <div key={category.category} className="menu-category">
        <h2>{category.category}</h2>
        {category.items.map((item) => (
          <div key={item.title} className="menu-item">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p>Price: ${(item.price / 100).toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
    ))}
  </div>
);

export default Menu;
