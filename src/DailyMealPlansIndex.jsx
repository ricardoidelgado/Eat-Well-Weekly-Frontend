import { Link } from "react-router-dom";
import { useState } from "react";

export function DailyMealPlansIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="dmp-index">
      <div className="row">
        <h1 className="col-6 pt-3">All Daily Meal Plans</h1>
        <div className="col-6 d-flex justify-content-end">
          <div className="row pt-3">
            <label htmlFor="searchBox">
              <b>Search Daily Meal Plans</b>
            </label>
            <input
              id="searchBox"
              className="align-self-end"
              type="text"
              value={searchFilter}
              onChange={(event) => setSearchFilter(event.target.value)}
            />
          </div>
        </div>
      </div>
      <Link className="btn btn-success" to="/daily_meal_plans/new">
        Create Daily Meal Plan
      </Link>
      <div className="accordion" id="accordionExample">
        {props.dailyMealPlans
          ?.filter((dailyMealPlan) => dailyMealPlan.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((dailyMealPlan) => (
            <div key={dailyMealPlan.id}>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#` + dailyMealPlan.id}
                    aria-expanded="true"
                    aria-controls={dailyMealPlan.id}
                  >
                    {dailyMealPlan.name}
                  </button>
                </h2>
                <div
                  id={dailyMealPlan.id}
                  className="accordion-collapse collapse show"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-4">
                        Breakfast: {dailyMealPlan.breakfast_meal?.name}
                        <br />
                        <img src={dailyMealPlan.breakfast_meal?.picture} alt="" />
                      </div>
                      <div className="col-4">
                        Lunch: {dailyMealPlan.lunch_meal?.name}
                        <br />
                        <img src={dailyMealPlan.lunch_meal?.picture} alt="" />
                      </div>
                      <div className="col-4">
                        Dinner: {dailyMealPlan.dinner_meal?.name}
                        <br />
                        <img src={dailyMealPlan.dinner_meal?.picture} alt="" />
                      </div>
                    </div>
                    <br />
                    <Link className="btn btn-primary col-12" to={`/daily_meal_plans/${dailyMealPlan.id}`}>
                      More Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
