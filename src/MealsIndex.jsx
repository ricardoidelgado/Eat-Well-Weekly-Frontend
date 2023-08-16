import { Link } from "react-router-dom";
import { useState } from "react";

export function MealsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="meals-index">
      <div className="row">
        <h1 className="col-6 pt-3">All Meals</h1>
        <div className="col-6 d-flex justify-content-end">
          <div className="row pt-3">
            <label htmlFor="searchBox">
              <b>Search Meals</b>
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
      <Link className="btn btn-success col" to="/meals/new">
        Create Meal
      </Link>
      <div className="row pt-3">
        {props.meals
          .filter((meal) =>
            meal.name.toLowerCase().includes(searchFilter.toLowerCase())
          )
          .map((meal) => (
            <div className="col-3 g-0 d-flex" key={meal.id}>
              <div className="card w-100">
                <img
                  src={meal.picture}
                  className="card-img-top h-50 img-fluid"
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{meal.name}</h5>
                  <p className="card-text">
                    Calories:
                    {meal.nutritional_summary?.calories.toLocaleString(
                      "en-US",
                      { maximumFractionDigits: 0 }
                    )}
                  </p>
                  <Link
                    className="btn btn-primary mt-auto"
                    to={`/meals/${meal.id}`}
                  >
                    More Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
