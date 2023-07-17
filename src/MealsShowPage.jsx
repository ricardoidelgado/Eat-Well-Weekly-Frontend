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
      <img src={meal.picture} alt="" />
      <p>Ingredients: </p>
      <ul>
        {meal.meal_ingredients?.map((mealIngredient) => (
          <div key={mealIngredient.id}>
            <li>
              {mealIngredient.ingredient.name} - Quantity: {mealIngredient.ingredient_quantity}
              <button onClick={() => props.onShowMealIngredient(mealIngredient, meal)}>Update Ingredient</button>
            </li>
          </div>
        ))}
      </ul>
      <button onClick={() => setNewMealIngredientVisibility(true)}>Add New Ingredient</button>
      {newMealIngredientVisibility ? (
        <MealIngredientsNew
          onCreateMealIngredient={props.onCreateMealIngredient}
          meal={meal}
          ingredients={props.ingredients}
        />
      ) : (
        <></>
      )}

      <h3>Nutritional Summary</h3>
      <p>Calories: {meal.nutritional_summary?.calories}</p>
      <p>Fat: {meal.nutritional_summary?.fat}</p>
      <p>Sodium: {meal.nutritional_summary?.sodium}</p>
      <p>Carbs: {meal.nutritional_summary?.carbs}</p>
      <p>Protein: {meal.nutritional_summary?.protein}</p>
      <p>Sugar: {meal.nutritional_summary?.sugar}</p>
      <p>Cholesterol: {meal.nutritional_summary?.cholesterol}</p>

      <button onClick={() => setEditMealVisibility(true)}>Edit Meal</button>
      {editMealVisibility ? (
        <>
          <h1>Edit Meal</h1>
          <form onSubmit={handleSubmit}>
            <div>
              Name: <input name="name" defaultValue={meal.name} type="text" />
            </div>
            <div>
              Picture: <input name="picture" defaultValue={meal.picture} type="text" />
            </div>
            <button className="btn btn-warning" type="submit">
              Update Meal
            </button>
          </form>
          <button className="btn btn-danger" onClick={handleClick}>
            Delete Meal
          </button>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
