import { Link } from "react-router-dom";
import { useState } from "react";

export function WeeklyMealPlansIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <h1>All Weekly Meal Plans</h1>
      <Link className="btn btn-success mb-3" to="/weekly_meal_plans/new">
        Create Weekly Meal Plan
      </Link>
      <div>
        Search
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.weeklyMealPlans
        .filter((weeklyMealPlan) => weeklyMealPlan.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((weeklyMealPlan) => (
          <div key={weeklyMealPlan.id}>
            <h2>{weeklyMealPlan.name}</h2>
            <Link className="btn btn-primary" to={`/weekly_meal_plans/${weeklyMealPlan.id}`}>
              More Details
            </Link>
          </div>
        ))}
    </div>
  );
}
