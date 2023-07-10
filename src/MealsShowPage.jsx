import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function MealsShowPage(props) {
  const [meal, setMeal] = useState({});
  const params = useParams();

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
        {meal.meal_ingredients?.map((meal_ingredient) => (
          <div key={meal_ingredient.id}>
            <li>
              {meal_ingredient.ingredient.name} - Quantity: {meal_ingredient.ingredient_quantity}
            </li>
          </div>
        ))}
      </ul>

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
        Destroy Meal
      </button>
    </div>
  );
}
