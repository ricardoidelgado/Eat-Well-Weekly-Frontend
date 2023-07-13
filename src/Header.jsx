import { LogoutLink } from "./LogoutLink";
import { Link } from "react-router-dom";

export function Header() {
  let authenticationLink;
  if (localStorage.jwt === undefined) {
    authenticationLink = (
      <>
        <li className="nav-item">
          <Link to="/login-signup" className="nav-link">
            Sign Up & Log In
          </Link>
        </li>
      </>
    );
  } else {
    authenticationLink = (
      <li className="nav-item">
        <LogoutLink />
      </li>
    );
  }

  return (
    <nav className="navbar navbar-expand-lg bg-light">
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

            {authenticationLink}

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Meal Plans
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/weekly_meal_plans">
                    All Weakly Meal Plans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/daily_meal_plans">
                    All Daily Meal Plans
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/meals">
                    All Meals
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/ingredients">
                    All Ingredients
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
