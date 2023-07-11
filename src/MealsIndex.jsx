import { Link } from "react-router-dom";
import { useState } from "react";

export function MealsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div id="meals-index">
      <h1>All Meals</h1>
      <Link className="btn btn-success" to="/meals/new">
        Create New Meal
      </Link>
      <div>
        Search
        <input type="text" value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} />
      </div>
      {props.meals
        .filter((meal) => meal.name.toLowerCase().includes(searchFilter.toLowerCase()))
        .map((meal) => (
          <div key={meal.id}>
            <h2>{meal.name}</h2>
            <img src={meal.picture} />
            <div>
              <Link className="btn btn-primary" to={`/meals/${meal.id}`}>
                More Details
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}
