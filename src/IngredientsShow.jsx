export function IngredientsShow(props) {
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
    </div>
  );
}
