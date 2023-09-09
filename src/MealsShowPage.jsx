import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MealIngredientsNew } from "./MealIngredientsNew";

export function MealsShowPage(props) {
  const [meal, setMeal] = useState({});
  const params = useParams();
  const [newMealIngredientVisibility, setNewMealIngredientVisibility] =
    useState(false);
  const [editMealVisibility, setEditMealVisibility] = useState(false);

  const handleShowMeal = () => {
    axios.get(`/meals/${params.id}.json`).then((response) => {
      setMeal(response.data);
    });
  };

  useEffect(handleShowMeal, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateMeal(meal.id, params);
  };

  const handleClick = () => {
    props.onDestroyMeal(meal);
  };

  return (
    <div id="meals-show">
      <h2>{meal.name}</h2>
      <img id="meals-show-image" className="mb-3" src={meal.picture} />
      <h3 className="mt-3">Ingredients: </h3>

      {meal.meal_ingredients?.map((mealIngredient) => (
        <ul
          className="list-group list-group-horizontal row"
          key={mealIngredient.id}
        >
          <li className="list-group-item col-2 d-flex align-items-center">
            {mealIngredient.ingredient.name}
          </li>
          <li className="list-group-item col-2 d-flex align-items-center">
            Quantity:{" "}
            {mealIngredient.ingredient_quantity.toLocaleString("en-US", {
              maximumFractionDigits: 0,
            })}
          </li>
          <li className="list-group-item col-2">
            <button
              className="btn btn-warning"
              onClick={() => props.onShowMealIngredient(mealIngredient, meal)}
            >
              Edit Ingredient
            </button>
          </li>
        </ul>
      ))}

      {!newMealIngredientVisibility ? (
        <button
          className="btn btn-success mt-3"
          onClick={() => setNewMealIngredientVisibility(true)}
        >
          Add New Ingredient
        </button>
      ) : null}

      {newMealIngredientVisibility ? (
        <>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setNewMealIngredientVisibility(false)}
          >
            Cancel Add New Ingredient
          </button>
          <MealIngredientsNew
            onCreateMealIngredient={props.onCreateMealIngredient}
            meal={meal}
            ingredients={props.ingredients}
          />
        </>
      ) : null}

      <h3 className="mt-3">Nutritional Summary</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Meal Total</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Calories</td>
            <td>
              {meal.nutritional_summary?.calories.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Fat (g)</td>
            <td>
              {meal.nutritional_summary?.fat.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Sodium (mg)</td>
            <td>
              {meal.nutritional_summary?.sodium.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Carbs (g)</td>
            <td>
              {meal.nutritional_summary?.carbs.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Protein (g)</td>
            <td>
              {meal.nutritional_summary?.protein.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Sugar (g)</td>
            <td>
              {meal.nutritional_summary?.sugar.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Cholesterol (mg)</td>
            <td>
              {meal.nutritional_summary?.cholesterol.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
        </tbody>
      </table>

      {!editMealVisibility ? (
        <button
          className="btn btn-warning mt-3"
          onClick={() => setEditMealVisibility(true)}
        >
          Edit Meal
        </button>
      ) : null}

      {editMealVisibility ? (
        <>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setEditMealVisibility(false)}
          >
            Cancel Edit
          </button>
          <h1 className="mt-3">Edit Meal</h1>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-2 col-6">
                <label htmlFor="mealName" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="mealName"
                  defaultValue={meal.name}
                />
              </div>
              <div className="mb-2 col-6">
                <label htmlFor="mealPicture" className="form-label">
                  Picture
                </label>
                <input
                  name="picture"
                  type="text"
                  className="form-control"
                  id="mealPicture"
                  defaultValue={meal.picture}
                />
              </div>
              <button className="btn btn-warning mt-3 col-6" type="submit">
                Update Meal
              </button>
              <button
                className="btn btn-danger mt-3 col-6"
                onClick={handleClick}
              >
                Delete Meal
              </button>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
}
