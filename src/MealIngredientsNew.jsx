export function MealIngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMealIngredient(params, () => event.target.reset());
  };

  return (
    <div>
      <h1>New Meal Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Meal Id: <input name="meal_id" type="text" />
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
