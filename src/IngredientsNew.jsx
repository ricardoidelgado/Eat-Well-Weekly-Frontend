export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
  };
  return (
    <div>
      <h1>New Ingredient</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Picture: <input name="picture" type="text" />
        </div>
        <div>
          Calories: <input name="calories" type="integer" />
        </div>
        <div>
          Fat: <input name="fat" type="integer" />
        </div>
        <div>
          Sodium: <input name="sodium" type="integer" />
        </div>
        <div>
          Carbs: <input name="carbs" type="integer" />
        </div>
        <div>
          Protein: <input name="protein" type="integer" />
        </div>
        <div>
          Sugar: <input name="sugar" type="integer" />
        </div>
        <div>
          Cholesterol: <input name="cholesterol" type="integer" />
        </div>
        <button className="btn btn-success" type="submit">
          Create Ingredient
        </button>
      </form>
    </div>
  );
}
