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
      {props.user?.id ? (
        <Link className="btn btn-success mb-3" to="/daily_meal_plans/new">
          Create Daily Meal Plan
        </Link>
      ) : null}
      <div className="accordion" id="accordionExample">
        {props.dailyMealPlans
          ?.filter((dailyMealPlan) =>
            dailyMealPlan.name
              .toLowerCase()
              .includes(searchFilter.toLowerCase())
          )
          .map((dailyMealPlan) => (
            <div key={dailyMealPlan.id}>
              <div className="accordion-item mb-3">
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
                  className="accordion-collapse collapse"
                  data-bs-parent="#accordionExample"
                >
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-4">
                        <b>Breakfast:</b> {dailyMealPlan.breakfast_meal?.name}
                        <br />
                        <img
                          className="mx-3"
                          src={dailyMealPlan.breakfast_meal?.picture}
                        />
                      </div>
                      <div className="col-4">
                        <b>Lunch:</b> {dailyMealPlan.lunch_meal?.name}
                        <br />
                        <img
                          className="mx-3"
                          src={dailyMealPlan.lunch_meal?.picture}
                        />
                      </div>
                      <div className="col-4">
                        <b>Dinner:</b> {dailyMealPlan.dinner_meal?.name}
                        <br />
                        <img
                          className="mx-3"
                          src={dailyMealPlan.dinner_meal?.picture}
                        />
                      </div>
                      <div className="col-4 mx-auto mt-3">
                        <b>Total Calories: </b>
                        {dailyMealPlan.nutritional_summary?.calories.toLocaleString(
                          "en-US",
                          { maximumFractionDigits: 0 }
                        )}
                      </div>
                    </div>
                    <br />
                    <Link
                      className="btn btn-primary col-12"
                      to={`/daily_meal_plans/${dailyMealPlan.id}`}
                    >
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
