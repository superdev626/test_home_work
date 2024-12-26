import React, { useState } from 'react';

const MealSuggestion = ({ menu }) => {
  const [input, setInput] = useState('');
  const [suggestion, setSuggestion] = useState(null);

  const suggestMeal = () => {
    const keywords = input.toLowerCase().split(' ');
    const matchedItems = menu.flatMap((category) =>
      category.items.filter((item) =>
        keywords.some((keyword) => item.tags.join(' ').toLowerCase().includes(keyword))
      )
    );
    setSuggestion(matchedItems);
  };

  return (
    <div className="meal-suggestion">
      <h2>Meal Suggestion</h2>
      <input
        type="text"
        placeholder="Enter your preferences (e.g., spicy, gluten-free)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={suggestMeal}>Suggest Meal</button>
      {suggestion && (
        <ul>
          {suggestion.map((item) => (
            <li key={item.title}>
              {item.title} - {item.tags.join(', ')}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MealSuggestion;
