import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export function DailyMealPlansShowPage(props) {
  const [dailyMealPlan, setDailyMealPlan] = useState({});
  const params = useParams();

  let handleShowDailyMealPlan = () => {
    axios.get(`http://localhost:3000/daily_meal_plans/${params.id}.json`).then((response) => {
      setDailyMealPlan(response.data);
    });
  };

  useEffect(handleShowDailyMealPlan, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateDailyMealPlan(dailyMealPlan.id, params);
  };

  const handleClick = () => {
    props.onDestroyDailyMealPlan(dailyMealPlan);
  };

  if (dailyMealPlan) {
    return (
      <div id="dmp-show">
        <h2>{dailyMealPlan.name}</h2>
        <ul>
          <li>Breakfast: {dailyMealPlan.breakfast_meal?.name}</li>
          <img src={dailyMealPlan.breakfast_meal?.picture} alt="" />
        </ul>
        <ul>
          <li>Lunch: {dailyMealPlan.lunch_meal?.name}</li>
          <img src={dailyMealPlan.lunch_meal?.picture} alt="" />
        </ul>
        <ul>
          <li>Dinner: {dailyMealPlan.dinner_meal?.name}</li>
          <img src={dailyMealPlan.dinner_meal?.picture} alt="" />
        </ul>

        <h1>Edit Daily Meal Plan</h1>
        <form onSubmit={handleSubmit}>
          <div>
            Name: <input name="name" type="text" defaultValue={dailyMealPlan.name} />
          </div>
          <div>
            Breakfast: <input name="breakfast" type="number" defaultValue={dailyMealPlan.breakfast} />
          </div>
          <div>
            Lunch: <input name="lunch" type="number" defaultValue={dailyMealPlan.lunch} />
          </div>
          <div>
            Dinner: <input name="dinner" type="number" defaultValue={dailyMealPlan.dinner} />
          </div>
          <button type="submit">Update Daily Meal Plan</button>
        </form>

        <button onClick={handleClick}>Delete Daily Meal Plan</button>
      </div>
    );
  }
}
