import { useNavigate } from "react-router-dom";
import { MealsSelect } from "./MealsSelect";
import { useState } from "react";

export function DailyMealPlansNew(props) {
  const [isSelectBreakfastVisibility, setIsSelectBreakfastVisibility] =
    useState(false);
  const [isSelectLunchVisibility, setIsSelectLunchVisibility] = useState(false);
  const [isSelectDinnerVisibility, setIsSelectDinnerVisibility] =
    useState(false);
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
            Breakfast
            <input
              type="text"
              className="form-control"
              defaultValue={breakfast.name}
              placeholder="Please select a meal"
              disabled
            />
          </div>

          <button className="btn btn-primary mb-3" onClick={showBreakfastMeals}>
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
            <input name="lunch" type="number" defaultValue={lunch.id} hidden />
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

          <button className="btn btn-primary mb-3" onClick={showDinnerMeals}>
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

          <button className="btn btn-success mt-3" type="submit">
            Create Daily Meal Plan
          </button>
        </div>
      </form>
    </div>
  );
}
