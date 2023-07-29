import { useNavigate } from "react-router-dom";
import { MealsSelect } from "./MealsSelect";
import { useState } from "react";

export function DailyMealPlansNew(props) {
  const [selectBreakfastVisibility, setSelectBreakfastVisibility] =
    useState(false);
  const [selectLunchVisibility, setSelectLunchVisibility] = useState(false);
  const [selectDinnerVisibility, setSelectDinnerVisibility] = useState(false);
  const [breakfast, setBreakfast] = useState("");
  const [lunch, setLunch] = useState("");
  const [dinner, setDinner] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateDailyMealPlan(params);
    navigate("/daily_meal_plans");
  };

  const showBreakfastMeals = (event) => {
    event.preventDefault();
    setSelectBreakfastVisibility(true);
  };

  const showLunchMeals = (event) => {
    event.preventDefault();
    setSelectLunchVisibility(true);
  };

  const showDinnerMeals = (event) => {
    event.preventDefault();
    setSelectDinnerVisibility(true);
  };

  return (
    <div>
      <h1>New Daily Meal Plan</h1>
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
            />
          </div>

          <div className="mb-2">
            <input
              name="breakfast"
              type="number"
              defaultValue={breakfast.id}
              hidden
            />
            <b>Breakfast</b>
            <input
              type="text"
              className="form-control"
              defaultValue={breakfast.name}
              disabled
            />
          </div>

          <button onClick={showBreakfastMeals}>Select Breakfast Meal</button>

          {selectBreakfastVisibility ? (
            <MealsSelect
              meals={props.meals}
              meal="Breakfast"
              setMeal={setBreakfast}
              setMealVisibility={setSelectBreakfastVisibility}
            />
          ) : null}

          <div className="mb-2">
            <input name="lunch" type="number" defaultValue={lunch.id} hidden />
            <b>Lunch</b>
            <input
              type="text"
              className="form-control"
              defaultValue={lunch.name}
              disabled
            />
          </div>

          <button onClick={showLunchMeals}>Select Lunch Meal</button>

          {selectLunchVisibility ? (
            <MealsSelect
              meals={props.meals}
              meal="Lunch"
              setMeal={setLunch}
              setMealVisibility={setSelectLunchVisibility}
            />
          ) : null}

          <div className="mb-2">
            <input
              name="dinner"
              type="number"
              defaultValue={dinner.id}
              hidden
            />
            <b>Dinner</b>
            <input
              type="text"
              className="form-control"
              defaultValue={dinner.name}
              disabled
            />
          </div>

          <button onClick={showDinnerMeals}>Dinner</button>

          {selectDinnerVisibility ? (
            <MealsSelect
              meals={props.meals}
              meal="Dinner"
              setMeal={setDinner}
              setMealVisibility={setSelectDinnerVisibility}
            />
          ) : null}

          <button className="btn btn-success" type="submit">
            Create Daily Meal Plan
          </button>
        </div>
      </form>
    </div>
  );
}
