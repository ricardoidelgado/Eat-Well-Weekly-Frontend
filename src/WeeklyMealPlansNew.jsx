import { useNavigate } from "react-router-dom";
import { DailyMealPlansSelect } from "./DailyMealPlansSelect";
import { useState } from "react";

export function WeeklyMealPlansNew(props) {
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
  const [sundayPlan, setSundayPlan] = useState("");
  const [mondayPlan, setMondayPlan] = useState("");
  const [tuesdayPlan, setTuesdayPlan] = useState("");
  const [wednesdayPlan, setWednesdayPlan] = useState("");
  const [thursdayPlan, setThursdayPlan] = useState("");
  const [fridayPlan, setFridayPlan] = useState("");
  const [saturdayPlan, setSaturdayPlan] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateWeeklyMealPlan(params);
    navigate("/weekly_meal_plans");
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

  return (
    <div>
      <h1>New Weekly Meal Plan</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-2 col-12">
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
                defaultValue={sundayPlan.name}
                placeholder="Please select a daily meal plan"
                disabled
              />
            </div>

            <button className="btn btn-primary mb-3" onClick={showSundayPlan}>
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
                defaultValue={mondayPlan.name}
                placeholder="Please select a daily meal plan"
                disabled
              />
            </div>

            <button className="btn btn-primary mb-3" onClick={showMondayPlan}>
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
                defaultValue={tuesdayPlan.name}
                placeholder="Please select a daily meal plan"
                disabled
              />
            </div>

            <button className="btn btn-primary mb-3" onClick={showTuesdayPlan}>
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
                defaultValue={wednesdayPlan.name}
                placeholder="Please select a daily meal plan"
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
                defaultValue={thursdayPlan.name}
                placeholder="Please select a daily meal plan"
                disabled
              />
            </div>

            <button className="btn btn-primary mb-3" onClick={showThursdayPlan}>
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
                defaultValue={fridayPlan.name}
                placeholder="Please select a daily meal plan"
                disabled
              />
            </div>

            <button className="btn btn-primary mb-3" onClick={showFridayPlan}>
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
                defaultValue={saturdayPlan.name}
                placeholder="Please select a daily meal plan"
                disabled
              />
            </div>

            <button className="btn btn-primary mb-3" onClick={showSaturdayPlan}>
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

            <button className="btn btn-success col-12" type="submit">
              Create Weekly Meal Plan
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
