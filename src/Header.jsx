import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  let authenticationLink;
  if (localStorage.jwt === undefined) {
    authenticationLink = (
      <li className="nav-item">
        <Link to="/login-signup" className="nav-link active">
          Sign Up & Log In
        </Link>
      </li>
    );
  } else {
    authenticationLink = (
      <li className="nav-item active">
        <LogoutLink />
      </li>
    );
  }

  return (
    <nav id="header" className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Meal Planner
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/weekly_meal_plans">
                Weekly Plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/daily_meal_plans">
                Daily Plans
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/meals">
                Meals
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/ingredients">
                Ingredients
              </a>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Create
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/weekly_meal_plans/new">
                    New Weekly Plan
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/daily_meal_plans/new">
                    New Daily Plan
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/meals/new">
                    New Meal
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/ingredients/new">
                    New Ingredient
                  </a>
                </li>
              </ul>
            </li>
            {authenticationLink}
          </ul>
        </div>
      </div>
    </nav>
  );
}
