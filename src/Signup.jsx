import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("/users.json", params)
      .then(() => {
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup" className="mt-3">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3 col-6">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              name="first_name"
              type="text"
              className="form-control"
              id="firstName"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              name="last_name"
              type="text"
              className="form-control"
              id="lastName"
              required
            />
          </div>
          <div className="mb-3 col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="password"
              required
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="passwordConfirmation" className="form-label">
              Password Confirmation
            </label>
            <input
              name="password_confirmation"
              type="password"
              className="form-control"
              id="passwordConfirmation"
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}
