export function IngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateIngredient(props.ingredient.id, params, () => event.target.reset());
  };

  return (
    <div>
      <h2>{props.ingredient.name}</h2>
      <img src={props.ingredient.picture} />
      <h3>Nutrition Facts</h3>
      <p>Calories: {props.ingredient.calories}</p>
      <p>Fat: {props.ingredient.fat}</p>
      <p>Sodium: {props.ingredient.sodium}</p>
      <p>Carbs: {props.ingredient.carbs}</p>
      <p>Protein: {props.ingredient.protein}</p>
      <p>Sugar: {props.ingredient.sugar}</p>
      <p>Cholesterol: {props.ingredient.cholesterol}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.ingredient.name} name="name" type="text" />
        </div>
        <div>
          Picture: <input defaultValue={props.ingredient.picture} name="picture" type="text" />
        </div>
        <div>
          Calories: <input defaultValue={props.ingredient.calories} name="calories" type="integer" />
        </div>
        <div>
          Fat: <input defaultValue={props.ingredient.fat} name="fat" type="integer" />
        </div>
        <div>
          Sodium: <input defaultValue={props.ingredient.sodium} name="sodium" type="integer" />
        </div>
        <div>
          Carbs: <input defaultValue={props.ingredient.carbs} name="carbs" type="integer" />
        </div>
        <div>
          Protein: <input defaultValue={props.ingredient.protein} name="protein" type="integer" />
        </div>
        <div>
          Sugar: <input defaultValue={props.ingredient.sugar} name="sugar" type="integer" />
        </div>
        <div>
          Cholesterol: <input defaultValue={props.ingredient.cholesterol} name="cholesterol" type="integer" />
        </div>
        <button type="submit">Update Ingredient</button>
      </form>
    </div>
  );
}
