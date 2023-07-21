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
              <p className="card-text">Calories: {dailyMealPlan.breakfast_nutrition?.calories}</p>
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
              <p className="card-text">Calories: {dailyMealPlan.lunch_nutrition?.calories}</p>
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
              <p className="card-text">Calories: {dailyMealPlan.dinner_nutrition?.calories}</p>
              <Link className="btn btn-primary mt-auto" to={`/meals/${dailyMealPlan.dinner}`}>
                See Dinner Meal
              </Link>
            </div>
          </div>
        </div>
      </div>

      <h3 className="mt-3">Grocery List</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Food Item</th>
            <th scope="col">Quantity</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          {dailyMealPlan.grocery_list?.map((hash) => (
            <tr key={hash.item}>
              <td>{hash.item}</td>
              <td>{hash.quantity}</td>
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
            <th scope="col">Daily Total</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Calories</td>
            <td>{dailyMealPlan.nutritional_summary?.calories}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{dailyMealPlan.nutritional_summary?.fat}</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{dailyMealPlan.nutritional_summary?.sodium}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{dailyMealPlan.nutritional_summary?.carbs}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{dailyMealPlan.nutritional_summary?.protein}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{dailyMealPlan.nutritional_summary?.sugar}</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>{dailyMealPlan.nutritional_summary?.cholesterol}</td>
          </tr>
        </tbody>
      </table>

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
