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

  const handleEmailGroceryList = (event) => {
    event.preventDefault();
    axios.get(`http://localhost:3000/email_weekly_meal_plans/${params.id}.json`).then(() => {
      console.log("Email Sent Successfully");
    });
  };

  return (
    <div id="wmp-show">
      <h2>{weeklyMealPlan.name}</h2>
      <div className="row">
        <div className="card col-4">
          <div className="card-header">Sunday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.sunday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.sunday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.sunday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.sunday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.sunday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.sunday}`}>
              See Sunday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Monday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.monday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.monday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.monday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.monday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.monday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.monday}`}>
              See Monday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Tuesday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.tuesday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.tuesday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.tuesday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.tuesday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.tuesday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.tuesday}`}>
              See Tuesday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Wednesday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.wednesday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.wednesday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.wednesday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.wednesday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.wednesday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.wednesday}`}>
              See Wednesday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Thursday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.thursday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.thursday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.thursday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.thursday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.thursday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.thursday}`}>
              See Thursday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Friday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.friday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.friday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.friday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.friday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.friday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.friday}`}>
              See Friday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4 mx-auto">
          <div className="card-header">Saturday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.saturday_plan?.name}</h5>
            <p className="card-text">Breakfast: {weeklyMealPlan.saturday_meals?.breakfast.name}</p>
            <p className="card-text">Lunch: {weeklyMealPlan.saturday_meals?.lunch.name}</p>
            <p className="card-text">Dinner: {weeklyMealPlan.saturday_meals?.dinner.name}</p>
            <p className="card-text">Calories: {weeklyMealPlan.saturday_nutrition?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</p>
            <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${weeklyMealPlan.saturday}`}>
              See Saturday Meal Plan
            </Link>
          </div>
        </div>
      </div>

      <h3>Grocery List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Food Item</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {weeklyMealPlan.grocery_list?.map((hash) => (
            <tr key={hash.item}>
              <td>{hash.item}</td>
              <td>{hash.quantity.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* <button onClick={handleTextGroceryList}>Text Grocery List</button> */}
      <button className="btn btn-secondary" onClick={handleEmailGroceryList}>
        Email Grocery List
      </button>

      <h3 className="mt-3">Nutritional Summary</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Weekly Total</th>
            <th scope="col">Daily Average</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Calories</td>
            <td>{weeklyMealPlan.nutritional_summary?.calories.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.calories / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{weeklyMealPlan.nutritional_summary?.fat.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.fat / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{weeklyMealPlan.nutritional_summary?.sodium.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.sodium / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{weeklyMealPlan.nutritional_summary?.carbs.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.carbs / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{weeklyMealPlan.nutritional_summary?.protein.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.protein / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{weeklyMealPlan.nutritional_summary?.sugar.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.sugar / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>{weeklyMealPlan.nutritional_summary?.cholesterol.toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
            <td>{(weeklyMealPlan.nutritional_summary?.cholesterol / 7).toLocaleString("en-US", {maximumFractionDigits: 0})}</td>
          </tr>
        </tbody>
      </table>

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
