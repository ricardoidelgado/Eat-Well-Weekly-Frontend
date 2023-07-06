export function IngredientsIndex(props) {
  return (
    <div>
      <h1>All Ingredients</h1>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          <img src={ingredient.picture} />
          <h3>Nutrition Facts</h3>
          <p>Calories: {ingredient.calories}</p>
          <p>Fat: {ingredient.fat}</p>
          <p>Sodium: {ingredient.sodium}</p>
          <p>Carbs: {ingredient.carbs}</p>
          <p>Protein: {ingredient.protein}</p>
          <p>Sugar: {ingredient.sugar}</p>
          <p>Cholesterol: {ingredient.cholesterol}</p>
        </div>
      ))}
    </div>
  );
}
