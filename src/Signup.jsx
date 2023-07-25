import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users.json", params)
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
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="email"
            />
          </div>
          <div className="mb-3 col-6">
            <label htmlFor="profilePicture" className="form-label">
              Profile Picture
            </label>
            <input
              name="profile_picture"
              type="text"
              className="form-control"
              id="profilePicture"
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
            />
          </div>
          <button className="btn btn-success" type="submit">
            Signup
          </button>
        </div>
        {/* <div>
          First Name: <input name="first_name" type="text" />
        </div>
        <div>
          Last Name: <input name="last_name" type="text" />
        </div>
        <div>
          Email: <input name="email" type="email" />
        </div>
        <div>
          Profile Picture: <input name="profile_picture" type="string" />
        </div>
        <div>
          Password: <input name="password" type="password" />
        </div>
        <div>
          Password confirmation:{" "}
          <input name="password_confirmation" type="password" />
        </div> */}
      </form>
    </div>
  );
}
