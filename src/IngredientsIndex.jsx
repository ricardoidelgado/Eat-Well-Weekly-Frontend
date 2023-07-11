import { useState } from "react";

export function IngredientsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="ingredients-index">
      <h1>All Ingredients</h1>
      <button type="button" className="btn btn-success" onClick={() => props.onNewIngredient()}>
        Create New Ingredient
      </button>
      <div>
        Search
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.ingredients
        .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((ingredient) => (
          <div key={ingredient.id}>
            <h2>{ingredient.name}</h2>
            <img src={ingredient.picture} />
            <p>Calories: {ingredient.calories}</p>
            <button type="button" className="btn btn-primary" onClick={() => props.onShowIngredient(ingredient)}>
              More Info
            </button>
          </div>
        ))}
    </div>
  );
}
