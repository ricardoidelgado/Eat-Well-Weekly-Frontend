import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export function DailyMealPlansShowPage(props) {
  const [dailyMealPlan, setDailyMealPlan] = useState({});
  const params = useParams();

  const handleShowDailyMealPlan = () => {
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

  // const handleTextGroceryList = (event) => {
  //   event.preventDefault();
  //   axios.get(`http://localhost:3000/twilio_daily_meal_plans/${params.id}.json`).then(() => {
  //     console.log("Text Message Sent Successfully");
  //   });
  // };

  const handleEmailGroceryList = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/email_daily_meal_plans/${params.id}.json`).then(() => {
      console.log("Email Sent Successfully");
    });
  };
  if (dailyMealPlan) {
    return (
      <div id="dmp-show">
        <h2>{dailyMealPlan.name}</h2>
        <ul>
          <li>Breakfast: {dailyMealPlan.breakfast_meal?.name}</li>
          <img src={dailyMealPlan.breakfast_meal?.picture} alt="" />
          <Link className="btn btn-primary" to={`/meals/${dailyMealPlan.breakfast}`}>
            See Breakfast Meal
          </Link>
        </ul>
        <ul>
          <li>Lunch: {dailyMealPlan.lunch_meal?.name}</li>
          <img src={dailyMealPlan.lunch_meal?.picture} alt="" />
          <Link className="btn btn-primary" to={`/meals/${dailyMealPlan.lunch}`}>
            See Lunch Meal
          </Link>
        </ul>
        <ul>
          <li>Dinner: {dailyMealPlan.dinner_meal?.name}</li>
          <img src={dailyMealPlan.dinner_meal?.picture} alt="" />
          <Link className="btn btn-primary" to={`/meals/${dailyMealPlan.dinner}`}>
            See Dinner Meal
          </Link>
        </ul>

        {/* <button onClick={handleTextGroceryList}>Text Grocery List</button> */}
        <button onClick={handleEmailGroceryList}>Email Grocery List</button>

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
