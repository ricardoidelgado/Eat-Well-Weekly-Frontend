import { useNavigate } from "react-router-dom";

export function DailyMealPlansNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDailyMealPlan(params);
    navigate("/daily_meal_plans");
  };
  return (
    <div>
      <h1>New Daily Meal Plan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Breakfast: <input name="breakfast" type="number" />
        </div>
        <div>
          Lunch: <input name="lunch" type="number" />
        </div>
        <div>
          Dinner: <input name="dinner" type="number" />
        </div>
        <button type="submit">Create Daily Meal Plan</button>
      </form>
    </div>
  );
}
