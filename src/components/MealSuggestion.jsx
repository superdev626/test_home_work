import React, { useState } from "react";

const MealSuggestion = () => {
  const [input, setInput] = useState("");
  const [suggestion, setSuggestion] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSuggestion = async () => {
    setLoading(true);
    setError(null);

    const apiKey = process.env.REACT_APP_OPENAI_API_KEY; // Access API key from .env

    if (!apiKey) {
      setError("API Key is missing or incorrect.");
      setLoading(false);
      return;
    }

    try {
      // Make a direct POST request to OpenAI's API
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apiKey}`,  // Use API key from environment variable
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",  // Or "gpt-4" if you have access
          messages: [
            {
              role: "system",
              content: "You are an assistant that helps suggest meals based on dietary preferences.",
            },
            {
              role: "user",
              content: `Suggest a meal based on these preferences: ${input}`,
            },
          ],
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setSuggestion(data.choices[0].message.content);
      } else {
        setError("Failed to fetch meal suggestion.");
      }
    } catch (error) {
      setError("Error connecting to OpenAI API.");
      console.error(error);
    }
    setLoading(false);
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
      <button onClick={handleSuggestion} disabled={loading}>
        {loading ? "Suggesting..." : "Suggest Meal"}
      </button>
      <div className="suggestion-results">
        {suggestion && <p>{suggestion}</p>}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
};

export default MealSuggestion;
