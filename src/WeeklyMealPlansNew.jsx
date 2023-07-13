import { useNavigate } from "react-router-dom";

export function WeeklyMealPlansNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWeeklyMealPlan(params);
    navigate("/weekly_meal_plans");
  };
  return (
    <div>
      <h1>New Weekly Meal Plan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Sunday: <input name="sunday" type="number" />
        </div>
        <div>
          Monday: <input name="monday" type="number" />
        </div>
        <div>
          Tuesday: <input name="tuesday" type="number" />
        </div>
        <div>
          Wednesday: <input name="wednesday" type="number" />
        </div>
        <div>
          Thursday: <input name="thursday" type="number" />
        </div>
        <div>
          Friday: <input name="friday" type="number" />
        </div>
        <div>
          Saturday: <input name="saturday" type="number" />
        </div>
        <button type="submit">Create Weekly Meal Plan</button>
      </form>
    </div>
  );
}
