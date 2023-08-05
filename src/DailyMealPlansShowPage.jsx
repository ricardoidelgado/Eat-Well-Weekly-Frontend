import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { MealsSelect } from "./MealsSelect";

export function DailyMealPlansShowPage(props) {
  const [dailyMealPlan, setDailyMealPlan] = useState({});
  const params = useParams();
  const [editDailyMealPlanVisibility, setEditDailyMealPlanVisibility] =
    useState(false);
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const [isSelectBreakfastVisibility, setIsSelectBreakfastVisibility] =
    useState(false);
  const [isSelectLunchVisibility, setIsSelectLunchVisibility] = useState(false);
  const [isSelectDinnerVisibility, setIsSelectDinnerVisibility] =
    useState(false);

  const handleShowDailyMealPlan = () => {
    axios
      .get(`http://localhost:3000/daily_meal_plans/${params.id}.json`)
      .then((response) => {
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

  const showBreakfastMeals = (event) => {
    event.preventDefault();
    setIsSelectBreakfastVisibility(true);
  };

  const showLunchMeals = (event) => {
    event.preventDefault();
    setIsSelectLunchVisibility(true);
  };

  const showDinnerMeals = (event) => {
    event.preventDefault();
    setIsSelectDinnerVisibility(true);
  };

  // const handleTextGroceryList = (event) => {
  //   event.preventDefault();
  //   axios.get(`http://localhost:3000/twilio_daily_meal_plans/${params.id}.json`).then(() => {
  //     console.log("Text Message Sent Successfully");
  //   });
  // };

  const handleEmailGroceryList = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:3000/email_daily_meal_plans/${params.id}.json`)
      .then(() => {
        console.log("Email Sent Successfully");
      });
  };

  return (
    <div id="dmp-show">
      <h2>{dailyMealPlan.name}</h2>
      <div className="row pt-3">
        <div className="col-4 g-0 d-flex align-items-stretch">
          <div className="card w-100">
            <img
              src={dailyMealPlan.breakfast_meal?.picture}
              className="card-img-top h-50 img-fluid"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Breakfast</h5>
              <p className="card-text">{dailyMealPlan.breakfast_meal?.name}</p>
              <p className="card-text">
                Calories:{" "}
                {dailyMealPlan.breakfast_nutrition?.calories.toLocaleString(
                  "en-US",
                  { maximumFractionDigits: 0 }
                )}
              </p>
              <Link
                className="btn btn-primary mt-auto"
                to={`/meals/${dailyMealPlan.breakfast}`}
              >
                See Breakfast Meal
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 g-0 d-flex align-items-stretch">
          <div className="card w-100">
            <img
              src={dailyMealPlan.lunch_meal?.picture}
              className="card-img-top h-50 img-fluid"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Lunch</h5>
              <p className="card-text">{dailyMealPlan.lunch_meal?.name}</p>
              <p className="card-text">
                Calories:{" "}
                {dailyMealPlan.lunch_nutrition?.calories.toLocaleString(
                  "en-US",
                  { maximumFractionDigits: 0 }
                )}
              </p>
              <Link
                className="btn btn-primary mt-auto"
                to={`/meals/${dailyMealPlan.lunch}`}
              >
                See Lunch Meal
              </Link>
            </div>
          </div>
        </div>
        <div className="col-4 g-0 d-flex align-items-stretch">
          <div className="card w-100">
            <img
              src={dailyMealPlan.dinner_meal?.picture}
              className="card-img-top h-50 img-fluid"
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">Dinner</h5>
              <p className="card-text">{dailyMealPlan.dinner_meal?.name}</p>
              <p className="card-text">
                Calories:{" "}
                {dailyMealPlan.dinner_nutrition?.calories.toLocaleString(
                  "en-US",
                  { maximumFractionDigits: 0 }
                )}
              </p>
              <Link
                className="btn btn-primary mt-auto"
                to={`/meals/${dailyMealPlan.dinner}`}
              >
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
              <td>
                {hash.quantity?.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </td>
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
            <td>
              {dailyMealPlan.nutritional_summary?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>
              {dailyMealPlan.nutritional_summary?.fat.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>
              {dailyMealPlan.nutritional_summary?.sodium.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>
              {dailyMealPlan.nutritional_summary?.carbs.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>
              {dailyMealPlan.nutritional_summary?.protein.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>
              {dailyMealPlan.nutritional_summary?.sugar.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>
              {dailyMealPlan.nutritional_summary?.cholesterol.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
        </tbody>
      </table>

      {!editDailyMealPlanVisibility ? (
        <button
          className="btn btn-warning mt-3"
          onClick={() => {
            setEditDailyMealPlanVisibility(true);
          }}
        >
          Edit Daily Meal Plan
        </button>
      ) : null}

      {editDailyMealPlanVisibility ? (
        <>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setEditDailyMealPlanVisibility(false)}
          >
            Cancel Edit
          </button>
          <h1>Edit Daily Meal Plan</h1>
          <h5>Please select an updated Breakfast, Lunch and Dinner</h5>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-2 col-12">
                <label htmlFor="dmpName" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  id="dmpName"
                  defaultValue={dailyMealPlan.name}
                />
              </div>

              <div className="mb-2">
                <input
                  name="breakfast"
                  type="number"
                  defaultValue={breakfast.id}
                  hidden
                  required
                />
                Breakfast
                <input
                  type="text"
                  className="form-control"
                  defaultValue={breakfast.name}
                  placeholder="Please select a meal"
                  disabled
                />
              </div>

              <button
                className="btn btn-primary mb-3"
                onClick={showBreakfastMeals}
              >
                Select Breakfast Meal
              </button>

              {isSelectBreakfastVisibility ? (
                <MealsSelect
                  meals={props.meals}
                  meal="Breakfast"
                  setMeal={setBreakfast}
                  setMealVisibility={setIsSelectBreakfastVisibility}
                />
              ) : null}

              <div className="mb-2">
                <input
                  name="lunch"
                  type="number"
                  defaultValue={lunch.id}
                  hidden
                  required
                />
                Lunch
                <input
                  type="text"
                  className="form-control"
                  defaultValue={lunch.name}
                  placeholder="Please select a meal"
                  disabled
                />
              </div>

              <button className="btn btn-primary mb-3" onClick={showLunchMeals}>
                Select Lunch Meal
              </button>

              {isSelectLunchVisibility ? (
                <MealsSelect
                  meals={props.meals}
                  meal="Lunch"
                  setMeal={setLunch}
                  setMealVisibility={setIsSelectLunchVisibility}
                />
              ) : null}

              <div className="mb-2">
                <input
                  name="dinner"
                  type="number"
                  defaultValue={dinner.id}
                  hidden
                  required
                />
                Dinner
                <input
                  type="text"
                  className="form-control"
                  defaultValue={dinner.name}
                  placeholder="Please select a meal"
                  disabled
                />
              </div>

              <button
                className="btn btn-primary mb-3"
                onClick={showDinnerMeals}
              >
                Select Dinner Meal
              </button>

              {isSelectDinnerVisibility ? (
                <MealsSelect
                  meals={props.meals}
                  meal="Dinner"
                  setMeal={setDinner}
                  setMealVisibility={setIsSelectDinnerVisibility}
                />
              ) : null}

              <button className="btn btn-warning col-6" type="submit">
                Update Daily Meal Plan
              </button>
              <button className="btn btn-danger col-6" onClick={handleClick}>
                Delete Daily Meal Plan
              </button>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
}
