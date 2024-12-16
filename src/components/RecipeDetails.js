import React from "react";

const RecipeDetails = ({ recipe, onClose }) => {
  return (
    <div className="recipe-details">
      <p>
        <b>Ingredients:</b> {recipe.ingredients.join(", ")}
      </p>
      <p>
        <b>Instructions:</b> {recipe.instructions}
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default RecipeDetails;
