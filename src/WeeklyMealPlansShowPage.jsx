import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export function WeeklyMealPlansShowPage(props) {
  const [weeklyMealPlan, setWeeklyMealPlan] = useState({});
  const params = useParams();

  const handleShowWeeklyMealPlan = () => {
    axios.get(`http://localhost:3000/weekly_meal_plans/${params.id}.json`).then((response) => {
      setWeeklyMealPlan(response.data);
    });
  };

  useEffect(handleShowWeeklyMealPlan, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateWeeklyMealPlan(weeklyMealPlan.id, params);
  };

  const handleClick = () => {
    props.onDestroyWeeklyMealPlan(weeklyMealPlan);
  };

  // const handleTextGroceryList = (event) => {
  //   event.preventDefault();
  //   axios.get(`http://localhost:3000/twilio_weekly_meal_plans/${params.id}.json`).then(() => {
  //     console.log("Text Message Sent Successfully");
  //   });
  // };

  // const handleEmailGroceryList = (event) => {
  //   event.preventDefault();
  //   axios.get(`http://localhost:3000/email_weekly_meal_plans/${params.id}.json`).then(() => {
  //     console.log("Email Sent Successfully");
  //   });
  // };

  return (
    <div id="wmp-show">
      <h2>{weeklyMealPlan.name}</h2>
      <ul>
        <li>Sunday: {weeklyMealPlan.sunday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.sunday}`}>
          See Sunday Meal Plan
        </Link>
        <li>Monday: {weeklyMealPlan.monday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.monday}`}>
          See Monday Meal Plan
        </Link>
        <li>Tuesday: {weeklyMealPlan.tuesday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.tuesday}`}>
          See Tuesday Meal Plan
        </Link>
        <li>Wednesday: {weeklyMealPlan.wednesday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.wednesday}`}>
          See Wednesday Meal Plan
        </Link>
        <li>Thursday: {weeklyMealPlan.thursday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.thursday}`}>
          See Thursday Meal Plan
        </Link>
        <li>Friday: {weeklyMealPlan.friday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.friday}`}>
          See Friday Meal Plan
        </Link>
        <li>Saturday: {weeklyMealPlan.saturday_plan?.name}</li>
        <Link className="btn btn-primary" to={`/daily_meal_plans/${weeklyMealPlan.saturday}`}>
          See Saturday Meal Plan
        </Link>
      </ul>

      {/* <button onClick={handleTextGroceryList}>Text Grocery List</button> */}
      {/* <button onClick={handleEmailGroceryList}>Email Grocery List</button> */}

      <h1>Edit Weekly Meal Plan</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" defaultValue={weeklyMealPlan.name} />
        </div>
        <div>
          Sunday: <input name="sunday" type="text" defaultValue={weeklyMealPlan.sunday} />
        </div>
        <div>
          Monday: <input name="monday" type="text" defaultValue={weeklyMealPlan.monday} />
        </div>
        <div>
          Tuesday: <input name="tuesday" type="text" defaultValue={weeklyMealPlan.tuesday} />
        </div>
        <div>
          Wednesday: <input name="wednesday" type="text" defaultValue={weeklyMealPlan.wednesday} />
        </div>
        <div>
          Thursday: <input name="thursday" type="text" defaultValue={weeklyMealPlan.thursday} />
        </div>
        <div>
          Friday: <input name="friday" type="text" defaultValue={weeklyMealPlan.friday} />
        </div>
        <div>
          Saturday: <input name="saturday" type="text" defaultValue={weeklyMealPlan.saturday} />
        </div>
        <button type="submit">Update Weekly Meal Plan</button>
      </form>

      <button onClick={handleClick}>Delete Weekly Meal Plan</button>
    </div>
  );
}
