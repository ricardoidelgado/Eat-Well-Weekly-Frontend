import { Link } from "react-router-dom";
import { useState } from "react";

export function DailyMealPlansIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="dmp-index">
      <h1>All Daily Meal Plans</h1>
      <Link className="btn btn-success" to="/daily_meal_plans/new">
        Create Daily Meal Plan
      </Link>
      <div>
        Search
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.dailyMealPlans
        ?.filter((dailyMealPlan) => dailyMealPlan.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((dailyMealPlan) => (
          <div key={dailyMealPlan.id}>
            <h2>{dailyMealPlan.name}</h2>
            <ul>
              <li>Breakfast: {dailyMealPlan.breakfast_meal?.name}</li>
              <img src={dailyMealPlan.breakfast_meal?.picture} alt="" />
              <li>Lunch: {dailyMealPlan.lunch_meal?.name}</li>
              <img src={dailyMealPlan.lunch_meal?.picture} alt="" />
              <li>Dinner: {dailyMealPlan.dinner_meal?.name}</li>
              <img src={dailyMealPlan.dinner_meal?.picture} alt="" />
            </ul>
            <Link className="btn btn-primary" to={`/daily_meal_plans/${dailyMealPlan.id}`}>
              More Details
            </Link>
          </div>
        ))}
    </div>
  );
}
