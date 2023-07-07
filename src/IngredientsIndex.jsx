export function IngredientsIndex(props) {
  return (
    <div id="ingredients-index">
      <h1>All Ingredients</h1>
      {props.ingredients.map((ingredient) => (
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
