import React, { useState } from 'react';

const MealSuggestion = ({ menu }) => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSuggestion = () => {
    const filteredItems = menu
      .flatMap((category) => category.items)
      .filter((item) => item.description.toLowerCase().includes(input.toLowerCase()));

    setSuggestion(filteredItems);
  };

  return (
    <div className="suggestion">
      <h2>Meal Suggestion</h2>
      <input
        type="text"
        placeholder="Enter your preferences (e.g., gluten-free, spicy)"
        value={input}
        onChange={handleInputChange}
      />
      <button onClick={handleSuggestion}>Suggest Meal</button>
      <ul>
        {suggestion.map((item) => (
          <li key={item.title}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default MealSuggestion;
