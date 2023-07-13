import { Link } from "react-router-dom";

export function WeeklyMealPlansIndex(props) {
  return (
    <div>
      <h1>All Weekly Meal Plans</h1>
      <Link className="btn btn-success" to="/weekly_meal_plans/new">
        Create New Weekly Meal Plan
      </Link>
      {props.weeklyMealPlans.map((weeklyMealPlan) => (
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
