export function IngredientsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
    window.location.href = "/ingredients"; // Change this to hide a modal, redirect to a specific page, etc.
  };
  return (
    <div>
      <h1>New Ingredient</h1>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-2 col-4">
            <label htmlFor="ingredientName" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="ingredientName"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientPicture" className="form-label">
              Picture
            </label>
            <input
              name="picture"
              type="text"
              className="form-control"
              id="ingredientPicture"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientCalories" className="form-label">
              Calories
            </label>
            <input
              name="calories"
              type="text"
              className="form-control"
              id="ingredientCalories"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientFat" className="form-label">
              Fat
            </label>
            <input
              name="fat"
              type="text"
              className="form-control"
              id="ingredientFat"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientSodium" className="form-label">
              Sodium
            </label>
            <input
              name="sodium"
              type="text"
              className="form-control"
              id="ingredientSodium"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientCarbs" className="form-label">
              Carbs
            </label>
            <input
              name="carbs"
              type="text"
              className="form-control"
              id="ingredientCarbs"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientProtein" className="form-label">
              Protein
            </label>
            <input
              name="protein"
              type="text"
              className="form-control"
              id="ingredientProtein"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientSugar" className="form-label">
              Sugar
            </label>
            <input
              name="sugar"
              type="text"
              className="form-control"
              id="ingredientSugar"
            />
          </div>
          <div className="mb-2 col-4">
            <label htmlFor="ingredientCholesterol" className="form-label">
              Cholesterol
            </label>
            <input
              name="cholesterol"
              type="text"
              className="form-control"
              id="ingredientCholesterol"
            />
          </div>
          <button className="btn btn-success" type="submit">
            Create Ingredient
          </button>
        </div>
      </form>
      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </div>
  );
}
