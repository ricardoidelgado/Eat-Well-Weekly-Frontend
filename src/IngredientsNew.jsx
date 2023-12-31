import { useState } from "react";

export function IngredientsNew(props) {
  const [queriedIngredient, setQueriedIngredient] = useState("");
  const [picture, setPicture] = useState("");
  const [servingSize, setServingSize] = useState("");

  const handleQueryNewIngredient = (event) => {
    event.preventDefault();
    const params = { query: queriedIngredient };
    props.onFindNewIngredient(params);
  };

  const handleQuerySubmit = (event) => {
    event.preventDefault();
    const params = {
      name: props.newIngredient.name,
      picture: picture,
      serving_size: servingSize || `${props.newIngredient.serving_size} (g)`,
      calories: props.newIngredient.calories,
      fat: props.newIngredient.fat,
      sodium: props.newIngredient.sodium,
      carbs: props.newIngredient.carbs,
      protein: props.newIngredient.protein,
      sugar: props.newIngredient.sugar,
      cholesterol: props.newIngredient.cholesterol,
    };
    props.onCreateIngredient(params, () => event.target.reset());
    window.location.href = "/ingredients"; // Change this to hide a modal, redirect to a specific page, etc.
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateIngredient(params, () => event.target.reset());
    window.location.href = "/ingredients"; // Change this to hide a modal, redirect to a specific page, etc.
  };
  return (
    <div>
      <h1>New Ingredient</h1>

      <h2>Quick Create</h2>
      <form onSubmit={handleQueryNewIngredient}>
        <label htmlFor="newIngredient" className="form-label">
          New Ingredient
        </label>
        <input
          name="query"
          type="text"
          className="form-control"
          id="newIngredient"
          onChange={(event) => setQueriedIngredient(event.target.value)}
        />
        <button className="btn btn-primary mt-2" type="submit">
          Search Ingredient
        </button>
      </form>

      {props.newIngredient?.name ? (
        <>
          <h3 className="mt-3">Here is what we found:</h3>
          <form className="mt-2" onSubmit={handleQuerySubmit}>
            <div className="row">
              <div className="mb-2 col-6">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.name}
                  disabled
                />
              </div>
              <div className="mb-2 col-6">
                <label className="form-label">Picture</label>
                <input
                  name="picture"
                  type="text"
                  className="form-control"
                  required
                  placeholder={picture}
                  onChange={(event) => setPicture(event.target.value)}
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">
                  Serving Size (Defaults to grams)
                </label>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={`${props.newIngredient?.serving_size} (g)`}
                  onChange={(event) => setServingSize(event.target.value)}
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Calories</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.calories}
                  disabled
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Fat (g)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.fat}
                  disabled
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Sodium (mg)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.sodium}
                  disabled
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Carbs (g)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.carbs}
                  disabled
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Protein (g)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.protein}
                  disabled
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Sugar (g)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.sugar}
                  disabled
                />
              </div>
              <div className="mb-2 col-3">
                <label className="form-label">Cholesterol (mg)</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder={props.newIngredient?.cholesterol}
                  disabled
                />
              </div>
              <button className="btn btn-success" type="submit">
                Create Ingredient
              </button>
            </div>
          </form>
        </>
      ) : null}

      <h2 className="mt-3">Manual Create</h2>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-2 col-6">
            <label htmlFor="ingredientName" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="ingredientName"
              required
            />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="ingredientPicture" className="form-label">
              Picture
            </label>
            <input
              name="picture"
              type="text"
              className="form-control"
              id="ingredientPicture"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientServingSize" className="form-label">
              Serving Size (Please include unit)
            </label>
            <input
              name="serving_size"
              type="text"
              className="form-control"
              id="ingredientServingSize"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientCalories" className="form-label">
              Calories
            </label>
            <input
              name="calories"
              type="text"
              className="form-control"
              id="ingredientCalories"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientFat" className="form-label">
              Fat (g)
            </label>
            <input
              name="fat"
              type="text"
              className="form-control"
              id="ingredientFat"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientSodium" className="form-label">
              Sodium (mg)
            </label>
            <input
              name="sodium"
              type="text"
              className="form-control"
              id="ingredientSodium"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientCarbs" className="form-label">
              Carbs (g)
            </label>
            <input
              name="carbs"
              type="text"
              className="form-control"
              id="ingredientCarbs"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientProtein" className="form-label">
              Protein (g)
            </label>
            <input
              name="protein"
              type="text"
              className="form-control"
              id="ingredientProtein"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientSugar" className="form-label">
              Sugar (g)
            </label>
            <input
              name="sugar"
              type="text"
              className="form-control"
              id="ingredientSugar"
              required
            />
          </div>
          <div className="mb-2 col-3">
            <label htmlFor="ingredientCholesterol" className="form-label">
              Cholesterol (mg)
            </label>
            <input
              name="cholesterol"
              type="text"
              className="form-control"
              id="ingredientCholesterol"
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Create Ingredient
          </button>
        </div>
      </form>
    </div>
  );
}
