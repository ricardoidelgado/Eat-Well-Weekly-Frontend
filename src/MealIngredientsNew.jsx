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
        <div className="row">
          <div>
            <input name="meal_id" type="text" defaultValue={props.meal.id} hidden />
          </div>
          <div className="mb-3">
            <b>Selected Ingredient:</b>
            <input
              type="text"
              className="form-control"
              defaultValue={selectedIngredient.name}
              placeholder="Please select an ingredient"
              disabled
            />
            <input
              name="ingredient_id"
              type="text"
              className="form-control"
              defaultValue={selectedIngredient.id}
              hidden
            />
          </div>
          <div className="mb-3">
            <label htmlFor="quantity" className="form-label">
              <b>Quantity:</b>
            </label>
            <input name="ingredient_quantity" type="number" className="form-control" id="quantity" />
          </div>

          <button type="submit">Add Ingredient to {props.meal.name}</button>
          <h1 className="col-6 pt-3">All Ingredients</h1>
          <div className="col-6 d-flex justify-content-end">
            <div className="row pt-3">
              <label htmlFor="searchBox">
                <b>Search Ingredients</b>
              </label>
              <input
                id="searchBox"
                className="align-self-end"
                type="text"
                value={searchFilter}
                onChange={(event) => setSearchFilter(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row pt-3">
          {props.ingredients
            .filter((ingredient) => ingredient.name.toLowerCase().includes(searchFilter.toLowerCase()))
            .map((ingredient) => (
              <div className="col-3 g-0 d-flex align-items-stretch" key={ingredient.id}>
                <div className="card w-100">
                  <img src={ingredient.picture} className="card-img-top h-50 img-fluid" />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{ingredient.name}</h5>
                    <p className="card-text">Calories: {ingredient.calories}</p>
                    <button
                      type="button"
                      className="btn btn-primary mt-auto"
                      onClick={() => setSelectedIngredient(ingredient)}
                    >
                      Select Ingredient
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </form>
    </div>
  );
}
