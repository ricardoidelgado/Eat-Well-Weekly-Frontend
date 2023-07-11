export function MealIngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMealIngredient(props.mealIngredient.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyMealIngredient(props.mealIngredient);
  };
  return (
    <div>
      <h1>Ingredients for {props.meal.name}</h1>
      <form onSubmit={handleSubmit}>
        <li>
          {props.mealIngredient.ingredient.name} - Quantity:
          <input name="ingredient_quantity" defaultValue={props.mealIngredient.ingredient_quantity} type="number" />
        </li>
        <button type="submit">Update Ingredient</button>
      </form>
      <button onClick={handleClick}>Remove Ingredient</button>
    </div>
  );
}
