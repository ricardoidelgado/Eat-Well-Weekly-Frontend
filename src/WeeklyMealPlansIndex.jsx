import { Link } from "react-router-dom";
import { useState } from "react";

export function WeeklyMealPlansIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <div className="row">
        <h1 className="col-6 pt-3">All Weekly Meal Plans</h1>
        <div className="col-6 d-flex justify-content-end">
          <div className="row pt-3">
            <label htmlFor="searchBox">
              <b>Search Weekly Meal Plans</b>
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
      <Link className="btn btn-success mb-3" to="/weekly_meal_plans/new">
        Create Weekly Meal Plan
      </Link>
      <div className="accordion" id="accordionExample">
        {props.weeklyMealPlans
          ?.filter((weeklyMealPlan) => weeklyMealPlan.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((weeklyMealPlan) => (
            <div key={weeklyMealPlan.id}>
              <div className="accordion-item mb-3">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#` + weeklyMealPlan.id}
                    aria-expanded="true"
                    aria-controls={weeklyMealPlan.id}
                  >
                    {weeklyMealPlan.name}
                  </button>
                </h2>
                <div id={weeklyMealPlan.id} className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                  <div className="accordion-body">
                    <div className="row">
                      <div className="col-6">
                        <b>Total Calories:</b> {weeklyMealPlan.nutritional_summary?.calories}
                      </div>
                      <div className="col-6">
                        <b>Daily Average Calories:</b> {weeklyMealPlan.nutritional_summary?.calories / 7}
                      </div>
                    </div>

                    <br />
                    <Link className="btn btn-primary col-12" to={`/weekly_meal_plans/${weeklyMealPlan.id}`}>
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
