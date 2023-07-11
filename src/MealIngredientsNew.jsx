import { useState } from "react";

export function MealIngredientsNew(props) {
  const [searchFilter, setSearchFilter] = useState("");
  const [selectedIngredient, setSelectedIngredient] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMealIngredient(params, () => event.target.reset());
    window.location.href = `/meals/${props.meal.id}`;
  };

  return (
    <div>
      <h1>New Ingredient for {props.meal.name}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input name="meal_id" type="text" defaultValue={props.meal.id} hidden />
        </div>
        <div>
          Selected Ingredient: {selectedIngredient.name}{" "}
          <input name="ingredient_id" type="text" defaultValue={selectedIngredient.id} hidden />
        </div>
        <div>
          Quantity: <input name="ingredient_quantity" type="text" />
        </div>
        <button type="submit">Add Ingredient to {props.meal.name}</button>
        <h3>All Ingredients</h3>
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
              <button type="button" className="btn btn-primary" onClick={() => setSelectedIngredient(ingredient)}>
                Select
              </button>
            </div>
          ))}
      </form>
    </div>
  );
}
