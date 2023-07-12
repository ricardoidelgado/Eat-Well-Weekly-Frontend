import { Link } from "react-router-dom";

export function DailyMealPlansIndex(props) {
  return (
    <div id="dmp-index">
      <h1>All Daily Meal Plans</h1>
      <Link className="btn btn-success" to="/daily_meal_plans/new">
        Create New Daily Meal Plan
      </Link>
      {props.dailyMealPlans.map((dailyMealPlan) => (
        <div key={dailyMealPlan.id}>
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
          <Link className="btn btn-primary" to={`/daily_meal_plans/${dailyMealPlan.id}`}>
            More Details
          </Link>
        </div>
      ))}
    </div>
  );
}
