import { useState } from "react";

export function IngredientsShow(props) {
  const [editIngredientVisibility, setEditIngredientVisibility] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateIngredient(props.ingredient.id, params, () =>
      event.target.reset()
    );
  };

  const handleClick = () => {
    props.onDestroyIngredient(props.ingredient);
  };

  return (
    <div id="ingredients-show" className="row">
      <img className="mx-3 col-6" src={props.ingredient.picture} />
      <div className="col-6">
        <h2>{props.ingredient.name}</h2>
        <p>Serving Size: {props.ingredient.serving_size}</p>
        <h3 className="mt-2">Nutritional Summary</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Category</th>
              <th scope="col">Ingredient Total</th>
            </tr>
          </thead>
          <tbody className="table-group-divider">
            <tr>
              <td>Calories</td>
              <td>
                {props.ingredient?.calories.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <td>Fat (g)</td>
              <td>
                {props.ingredient?.fat.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <td>Sodium (mg)</td>
              <td>
                {props.ingredient?.sodium.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <td>Carbs (g)</td>
              <td>
                {props.ingredient?.carbs.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <td>Protein (g)</td>
              <td>
                {props.ingredient?.protein.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <td>Sugar (g)</td>
              <td>
                {props.ingredient?.sugar.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
            <tr>
              <td>Cholesterol (mg)</td>
              <td>
                {props.ingredient?.cholesterol.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {!editIngredientVisibility ? (
        <button
          className="btn btn-warning mt-2"
          onClick={() => setEditIngredientVisibility(true)}
        >
          Edit Ingredient
        </button>
      ) : null}

      {editIngredientVisibility ? (
        <>
          <button
            className="btn btn-secondary mt-2"
            onClick={() => setEditIngredientVisibility(false)}
          >
            Cancel Edit
          </button>

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
                  defaultValue={props.ingredient.name}
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
                  defaultValue={props.ingredient.picture}
                />
              </div>
              <div className="mb-2 col-3">
                <label htmlFor="ingredientServingSize" className="form-label">
                  Serving Size
                </label>
                <input
                  name="picture"
                  type="text"
                  className="form-control"
                  id="ingredientServingSize"
                  defaultValue={props.ingredient.serving_size}
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
                  defaultValue={props.ingredient.calories}
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
                  defaultValue={props.ingredient.fat}
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
                  defaultValue={props.ingredient.sodium}
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
                  defaultValue={props.ingredient.carbs}
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
                  defaultValue={props.ingredient.protein}
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
                  defaultValue={props.ingredient.sugar}
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
                  defaultValue={props.ingredient.cholesterol}
                />
              </div>
              <button className="btn btn-warning col-6" type="submit">
                Update Ingredient
              </button>
              <button className="btn btn-danger col-6" onClick={handleClick}>
                Delete Ingredient
              </button>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
}
