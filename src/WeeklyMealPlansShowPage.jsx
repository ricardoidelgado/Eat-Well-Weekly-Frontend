import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { DailyMealPlansSelect } from "./DailyMealPlansSelect";

export function WeeklyMealPlansShowPage(props) {
  const [weeklyMealPlan, setWeeklyMealPlan] = useState({});
  const params = useParams();
  const [editWeeklyMealPlanVisibility, setEditWeeklyMealPlanVisibility] =
    useState(false);

  const [isSelectSundayPlanVisible, setIsSelectSundayPlanVisible] =
    useState(false);
  const [isSelectMondayPlanVisible, setIsSelectMondayPlanVisible] =
    useState(false);
  const [isSelectTuesdayPlanVisible, setIsSelectTuesdayPlanVisible] =
    useState(false);
  const [isSelectWednesdayPlanVisible, setIsSelectWednesdayPlanVisible] =
    useState(false);
  const [isSelectThursdayPlanVisible, setIsSelectThursdayPlanVisible] =
    useState(false);
  const [isSelectFridayPlanVisible, setIsSelectFridayPlanVisible] =
    useState(false);
  const [isSelectSaturdayPlanVisible, setIsSelectSaturdayPlanVisible] =
    useState(false);

  const [name, setName] = useState("");
  const [sundayPlan, setSundayPlan] = useState({});
  const [mondayPlan, setMondayPlan] = useState({});
  const [tuesdayPlan, setTuesdayPlan] = useState({});
  const [wednesdayPlan, setWednesdayPlan] = useState({});
  const [thursdayPlan, setThursdayPlan] = useState({});
  const [fridayPlan, setFridayPlan] = useState({});
  const [saturdayPlan, setSaturdayPlan] = useState({});

  const handleShowWeeklyMealPlan = () => {
    axios
      .get(`http://localhost:3000/weekly_meal_plans/${params.id}.json`)
      .then((response) => {
        setWeeklyMealPlan(response.data);
      });
  };

  useEffect(handleShowWeeklyMealPlan, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = {
      name: name,
      sunday: sundayPlan.id,
      monday: mondayPlan.id,
      tuesday: tuesdayPlan.id,
      wednesday: wednesdayPlan.id,
      thursday: thursdayPlan.id,
      friday: fridayPlan.id,
      saturday: saturdayPlan.id,
    };
    props.onUpdateWeeklyMealPlan(weeklyMealPlan.id, params);
  };

  const handleClick = () => {
    props.onDestroyWeeklyMealPlan(weeklyMealPlan);
  };

  const showSundayPlan = (event) => {
    event.preventDefault();
    setIsSelectSundayPlanVisible(true);
  };

  const showMondayPlan = (event) => {
    event.preventDefault();
    setIsSelectMondayPlanVisible(true);
  };

  const showTuesdayPlan = (event) => {
    event.preventDefault();
    setIsSelectTuesdayPlanVisible(true);
  };

  const showWednesdayPlan = (event) => {
    event.preventDefault();
    setIsSelectWednesdayPlanVisible(true);
  };

  const showThursdayPlan = (event) => {
    event.preventDefault();
    setIsSelectThursdayPlanVisible(true);
  };

  const showFridayPlan = (event) => {
    event.preventDefault();
    setIsSelectFridayPlanVisible(true);
  };

  const showSaturdayPlan = (event) => {
    event.preventDefault();
    setIsSelectSaturdayPlanVisible(true);
  };

  // const handleTextGroceryList = (event) => {
  //   event.preventDefault();
  //   axios.get(`http://localhost:3000/twilio_weekly_meal_plans/${params.id}.json`).then(() => {
  //     console.log("Text Message Sent Successfully");
  //   });
  // };

  const handleEmailGroceryList = (event) => {
    event.preventDefault();
    axios
      .get(`http://localhost:3000/email_weekly_meal_plans/${params.id}.json`)
      .then(() => {
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
            <p className="card-text">
              Breakfast: {weeklyMealPlan.sunday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.sunday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.sunday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.sunday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.sunday}`}
            >
              See Sunday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Monday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.monday_plan?.name}</h5>
            <p className="card-text">
              Breakfast: {weeklyMealPlan.monday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.monday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.monday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.monday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.monday}`}
            >
              See Monday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Tuesday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.tuesday_plan?.name}</h5>
            <p className="card-text">
              Breakfast: {weeklyMealPlan.tuesday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.tuesday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.tuesday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.tuesday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.tuesday}`}
            >
              See Tuesday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Wednesday</div>
          <div className="card-body">
            <h5 className="card-title">
              {weeklyMealPlan.wednesday_plan?.name}
            </h5>
            <p className="card-text">
              Breakfast: {weeklyMealPlan.wednesday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.wednesday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.wednesday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.wednesday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.wednesday}`}
            >
              See Wednesday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Thursday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.thursday_plan?.name}</h5>
            <p className="card-text">
              Breakfast: {weeklyMealPlan.thursday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.thursday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.thursday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.thursday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.thursday}`}
            >
              See Thursday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4">
          <div className="card-header">Friday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.friday_plan?.name}</h5>
            <p className="card-text">
              Breakfast: {weeklyMealPlan.friday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.friday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.friday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.friday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.friday}`}
            >
              See Friday Meal Plan
            </Link>
          </div>
        </div>
        <div className="card col-4 mx-auto">
          <div className="card-header">Saturday</div>
          <div className="card-body">
            <h5 className="card-title">{weeklyMealPlan.saturday_plan?.name}</h5>
            <p className="card-text">
              Breakfast: {weeklyMealPlan.saturday_meals?.breakfast.name}
            </p>
            <p className="card-text">
              Lunch: {weeklyMealPlan.saturday_meals?.lunch.name}
            </p>
            <p className="card-text">
              Dinner: {weeklyMealPlan.saturday_meals?.dinner.name}
            </p>
            <p className="card-text">
              Calories:
              {weeklyMealPlan.saturday_nutrition?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </p>
            <Link
              className="btn btn-primary col-12"
              to={`/daily_meal_plans/${weeklyMealPlan.saturday}`}
            >
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
              <td>
                {hash.quantity.toLocaleString("en-US", {
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
            <th scope="col">Weekly Total</th>
            <th scope="col">Daily Average</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Calories</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.calories.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
            <td>
              {(
                weeklyMealPlan.nutritional_summary?.calories / 7
              ).toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.fat.toLocaleString("en-US", {
                maximumFractionDigits: 0,
              })}
            </td>
            <td>
              {(weeklyMealPlan.nutritional_summary?.fat / 7).toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.sodium.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
            <td>
              {(weeklyMealPlan.nutritional_summary?.sodium / 7).toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.carbs.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
            <td>
              {(weeklyMealPlan.nutritional_summary?.carbs / 7).toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.protein.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
            <td>
              {(weeklyMealPlan.nutritional_summary?.protein / 7).toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.sugar.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
            <td>
              {(weeklyMealPlan.nutritional_summary?.sugar / 7).toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>
              {weeklyMealPlan.nutritional_summary?.cholesterol.toLocaleString(
                "en-US",
                { maximumFractionDigits: 0 }
              )}
            </td>
            <td>
              {(
                weeklyMealPlan.nutritional_summary?.cholesterol / 7
              ).toLocaleString("en-US", { maximumFractionDigits: 0 })}
            </td>
          </tr>
        </tbody>
      </table>

      {!editWeeklyMealPlanVisibility ? (
        <button
          className="btn btn-warning mt-3"
          onClick={() => {
            setEditWeeklyMealPlanVisibility(true);
            setName(weeklyMealPlan.name);
            setSundayPlan(weeklyMealPlan.sunday_plan);
            setMondayPlan(weeklyMealPlan.monday_plan);
            setTuesdayPlan(weeklyMealPlan.tuesday_plan);
            setWednesdayPlan(weeklyMealPlan.wednesday_plan);
            setThursdayPlan(weeklyMealPlan.thursday_plan);
            setFridayPlan(weeklyMealPlan.friday_plan);
            setSaturdayPlan(weeklyMealPlan.saturday_plan);
          }}
        >
          Edit Weekly Meal Plan
        </button>
      ) : null}

      {editWeeklyMealPlanVisibility ? (
        <>
          <button
            className="btn btn-secondary mt-3"
            onClick={() => setEditWeeklyMealPlanVisibility(false)}
          >
            Cancel Edit
          </button>
          <h1>Edit Weekly Meal Plan</h1>
          <h5>Please select an updated meal plan for each day</h5>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="mb-2 col-12">
                <div className="mb-2 col-12">
                  <label htmlFor="wmpName" className="form-label">
                    Name
                  </label>
                  <input
                    name="name"
                    type="text"
                    className="form-control"
                    id="wmpName"
                    defaultValue={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mb-2">
                  <input
                    name="sunday"
                    type="number"
                    defaultValue={sundayPlan.id}
                    hidden
                    required
                  />
                  Sunday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={sundayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showSundayPlan}
                >
                  Select Sunday Meal Plan
                </button>

                {isSelectSundayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Sunday"
                    setDailyPlan={setSundayPlan}
                    setDailyPlanVisibility={setIsSelectSundayPlanVisible}
                  />
                ) : null}

                <div className="mb-2">
                  <input
                    name="monday"
                    type="number"
                    defaultValue={mondayPlan.id}
                    hidden
                    required
                  />
                  Monday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={mondayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showMondayPlan}
                >
                  Select Monday Meal Plan
                </button>

                {isSelectMondayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Monday"
                    setDailyPlan={setMondayPlan}
                    setDailyPlanVisibility={setIsSelectMondayPlanVisible}
                  />
                ) : null}

                <div className="mb-2">
                  <input
                    name="tuesday"
                    type="number"
                    defaultValue={tuesdayPlan.id}
                    hidden
                    required
                  />
                  Tuesday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={tuesdayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showTuesdayPlan}
                >
                  Select Tuesday Meal Plan
                </button>

                {isSelectTuesdayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Tuesday"
                    setDailyPlan={setTuesdayPlan}
                    setDailyPlanVisibility={setIsSelectTuesdayPlanVisible}
                  />
                ) : null}

                <div className="mb-2">
                  <input
                    name="wednesday"
                    type="number"
                    defaultValue={wednesdayPlan.id}
                    hidden
                    required
                  />
                  Wednesday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={wednesdayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showWednesdayPlan}
                >
                  Select Wednesday Meal Plan
                </button>

                {isSelectWednesdayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Wednesday"
                    setDailyPlan={setWednesdayPlan}
                    setDailyPlanVisibility={setIsSelectWednesdayPlanVisible}
                  />
                ) : null}

                <div className="mb-2">
                  <input
                    name="thursday"
                    type="number"
                    defaultValue={thursdayPlan.id}
                    hidden
                    required
                  />
                  Thursday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={thursdayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showThursdayPlan}
                >
                  Select Thursday Meal Plan
                </button>

                {isSelectThursdayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Thursday"
                    setDailyPlan={setThursdayPlan}
                    setDailyPlanVisibility={setIsSelectThursdayPlanVisible}
                  />
                ) : null}

                <div className="mb-2">
                  <input
                    name="friday"
                    type="number"
                    defaultValue={fridayPlan.id}
                    hidden
                    required
                  />
                  Friday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={fridayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showFridayPlan}
                >
                  Select Friday Meal Plan
                </button>

                {isSelectFridayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Friday"
                    setDailyPlan={setFridayPlan}
                    setDailyPlanVisibility={setIsSelectFridayPlanVisible}
                  />
                ) : null}

                <div className="mb-2">
                  <input
                    name="saturday"
                    type="number"
                    defaultValue={saturdayPlan.id}
                    hidden
                    required
                  />
                  Saturday Meal Plan
                  <input
                    type="text"
                    className="form-control"
                    placeholder={saturdayPlan.name}
                    disabled
                  />
                </div>

                <button
                  className="btn btn-primary mb-3"
                  onClick={showSaturdayPlan}
                >
                  Select Saturday Meal Plan
                </button>

                {isSelectSaturdayPlanVisible ? (
                  <DailyMealPlansSelect
                    dailyMealPlans={props.dailyMealPlans}
                    meal="Saturday"
                    setDailyPlan={setSaturdayPlan}
                    setDailyPlanVisibility={setIsSelectSaturdayPlanVisible}
                  />
                ) : null}
                <div>
                  <button className="btn btn-warning col-6" type="submit">
                    Update Weekly Meal Plan
                  </button>
                  <button
                    className="btn btn-danger col-6"
                    onClick={handleClick}
                  >
                    Delete Weekly Meal Plan
                  </button>
                </div>
              </div>
            </div>
          </form>
        </>
      ) : null}
    </div>
  );
}
