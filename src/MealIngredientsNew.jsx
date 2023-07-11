export function MealIngredientsNew(props) {
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
          Ingredient Id: <input name="ingredient_id" type="text" />
        </div>
        <div>
          Quantity: <input name="ingredient_quantity" type="text" />
        </div>
        <button type="submit">Create Meal Ingredient</button>
      </form>
    </div>
  );
}
