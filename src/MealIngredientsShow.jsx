export function MealIngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMealIngredient(props.mealIngredient.id, params, () =>
      event.target.reset()
    );
    window.location.href = `/meals/${props.meal.id}`; // Change this to hide a modal, redirect to a specific page, etc.
  };

  const handleClick = () => {
    props.onDestroyMealIngredient(props.mealIngredient);
    window.location.href = `/meals/${props.meal.id}`; // Change this to hide a modal, redirect to a specific page, etc.
  };
  return (
    <div>
      <h1>Ingredients for {props.meal.name}</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-2 col-3">
            <label htmlFor="mealIngredient" className="form-label">
              {props.mealIngredient?.ingredient.name} - Quantity
            </label>
            <input
              name="ingredient_quantity"
              type="number"
              className="form-control"
              id="mealIngredient"
              defaultValue={props.mealIngredient?.ingredient_quantity}
            />
          </div>
        </div>
        <button className="btn btn-warning col-6" type="submit">
          Update Ingredient
        </button>
        <button className="btn btn-danger col-6" onClick={handleClick}>
          Remove Ingredient
        </button>
      </form>
    </div>
  );
}
