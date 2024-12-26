import React from 'react';

const Menu = ({ menu, addToCart }) => (
  <div>
    {menu.map((category) => (
      <div key={category.category} className="category">
        <h2>{category.category}</h2>
        <div className="items">
          {category.items.map((item) => (
            <div key={item.title} className="menu-item">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <p className="price">${(item.price / 100).toFixed(2)}</p>
              <button className="add-to-cart" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

export default Menu;
