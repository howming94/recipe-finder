import React, { useState } from "react";
import RecipeDetails from "./RecipeDetails";

const RecipeItem = ({ recipe }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <div className="recipe-item">
        <img src={recipe.image} alt={recipe.name} />
        <h2>{recipe.name}</h2>
        <p>
          <b>Cooking Time:</b> {recipe.cooking_time} minutes
        </p>
        <button onClick={() => setShowDetails(true)}>View Details</button>
        <br />
        <br />
        {showDetails && (
          <RecipeDetails
            recipe={recipe}
            onClose={() => setShowDetails(false)}
          />
        )}
      </div>
      <br />
    </div>
  );
};

export default RecipeItem;
