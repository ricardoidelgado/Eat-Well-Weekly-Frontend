import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { MealIngredientsNew } from "./MealIngredientsNew";

export function MealsShowPage(props) {
  const [meal, setMeal] = useState({});
  const params = useParams();
  const [newMealIngredientVisibility, setNewMealIngredientVisibility] = useState(false);
  const [editMealVisibility, setEditMealVisibility] = useState(false);

  const handleShowMeal = () => {
    axios.get(`http://localhost:3000/meals/${params.id}.json`).then((response) => {
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
      <img id="meals-show-image" src={meal.picture} alt="" />
      <h3 className="mt-3">Ingredients: </h3>

      {meal.meal_ingredients?.map((mealIngredient) => (
        <ul className="list-group list-group-horizontal row" key={mealIngredient.id}>
          <li className="list-group-item col-2">{mealIngredient.ingredient.name} </li>
          <li className="list-group-item col-2">Quantity: {mealIngredient.ingredient_quantity.toLocaleString("en-US", {maximumFractionDigits: 0})} </li>
          <li className="list-group-item col-2">
            <button className="btn btn-warning" onClick={() => props.onShowMealIngredient(mealIngredient, meal)}>
              Update Ingredient
            </button>
          </li>
        </ul>
      ))}

      <button className="btn btn-success mt-3" onClick={() => setNewMealIngredientVisibility(true)}>
        Add New Ingredient
      </button>
      {newMealIngredientVisibility ? (
        <MealIngredientsNew
          onCreateMealIngredient={props.onCreateMealIngredient}
          meal={meal}
          ingredients={props.ingredients}
        />
      ) : (
        <></>
      )}

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
            <td>{meal.nutritional_summary?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{meal.nutritional_summary?.fat.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{meal.nutritional_summary?.sodium.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{meal.nutritional_summary?.carbs.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{meal.nutritional_summary?.protein.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{meal.nutritional_summary?.sugar.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>{meal.nutritional_summary?.cholesterol.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
        </tbody>
      </table>

      <button className="btn btn-warning mt-3" onClick={() => setEditMealVisibility(true)}>
        Edit Meal
      </button>
      {editMealVisibility ? (
        <>
          <h1 className="mt-3">Edit Meal</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Name: <input name="name" defaultValue={meal.name} type="text" />
            </div>
            <div>
              Picture: <input name="picture" defaultValue={meal.picture} type="text" />
            </div>
            <button className="btn btn-warning mt-3" type="submit">
              Update Meal
            </button>
          </form>
          <button className="btn btn-danger mt-3" onClick={handleClick}>
            Delete Meal
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
