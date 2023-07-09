import { Link } from "react-router-dom";

export function MealsIndex(props) {
  return (
    <div id="meals-index">
      <h1>All Meals</h1>
      <Link className="btn btn-success" to="/meals/new">
        Create New Meal
      </Link>
      {props.meals.map((meal) => (
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
