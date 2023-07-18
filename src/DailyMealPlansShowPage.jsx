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
  return (
    <div id="dmp-show">
      <h2>{dailyMealPlan.name}</h2>
      <div className="row pt-3">
        <div className="col-4 g-0 d-flex align-items-stretch">
          <div className="card w-100">
            <img src={dailyMealPlan.breakfast_meal?.picture} className="card-img-top h-50 img-fluid" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Breakfast</h5>
              <p className="card-text">{dailyMealPlan.breakfast_meal?.name}</p>
              <Link className="btn btn-primary mt-auto" to={`/meals/${dailyMealPlan.breakfast}`}>
                See Breakfast Meal
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 g-0 d-flex align-items-stretch">
          <div className="card w-100">
            <img src={dailyMealPlan.lunch_meal?.picture} className="card-img-top h-50 img-fluid" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Lunch</h5>
              <p className="card-text">{dailyMealPlan.lunch_meal?.name}</p>
              <Link className="btn btn-primary mt-auto" to={`/meals/${dailyMealPlan.lunch}`}>
                See Lunch Meal
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 g-0 d-flex align-items-stretch">
          <div className="card w-100">
            <img src={dailyMealPlan.dinner_meal?.picture} className="card-img-top h-50 img-fluid" />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dinner</h5>
              <p className="card-text">{dailyMealPlan.dinner_meal?.name}</p>
              <Link className="btn btn-primary mt-auto" to={`/meals/${dailyMealPlan.dinner}`}>
                See Dinner Meal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h3>Grocery List</h3>
      {dailyMealPlan.grocery_list?.map((hash) => (
        <div key={hash.item}>
          <p>
            {hash.item}: {hash.quantity}
          </p>
        </div>
      ))}

      <h3>Nutritional Summary - Daily Total</h3>
      <p>Calories: {dailyMealPlan.nutritional_summary?.calories}</p>
      <p>Fat: {dailyMealPlan.nutritional_summary?.fat}</p>
      <p>Sodium: {dailyMealPlan.nutritional_summary?.sodium}</p>
      <p>Carbs: {dailyMealPlan.nutritional_summary?.carbs}</p>
      <p>Protein: {dailyMealPlan.nutritional_summary?.protein}</p>
      <p>Sugar: {dailyMealPlan.nutritional_summary?.sugar}</p>
      <p>Cholesterol: {dailyMealPlan.nutritional_summary?.cholesterol}</p>

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
