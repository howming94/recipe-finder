import React, { useState, useEffect } from "react";
import "./App.css";
import SearchBar from "./components/SearchBar";
import RecipeList from "./components/RecipeList";
import recipesData from "./data/recipes.json";

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRecipes, setFilteredRecipes] = useState(recipesData);

  useEffect(() => {
    if (searchQuery) {
      setFilteredRecipes(
        recipesData.filter((recipe) =>
          recipe.ingredients.some((ingredient) =>
            ingredient.toLowerCase().includes(searchQuery.toLowerCase())
          )
        )
      );
    } else {
      setFilteredRecipes(recipesData);
    }
  }, [searchQuery]);

  return (
    <div className="app-container">
      <h1>Recipe Finder</h1>
      <div className="search-bar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      </div>
      {filteredRecipes.length > 0 ? (
        <div className="recipe-list">
          <RecipeList recipes={filteredRecipes} />
        </div>
      ) : (
        <p className="no-recipes">
          No recipes match your search. Please try another keyword.
        </p>
      )}
    </div>
  );
};

export default App;
