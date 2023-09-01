import { useNavigate } from "react-router-dom";

export function MealsNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMeal(params);
    event.target.reset();
    navigate("/meals");
  };
  return (
    <div id="meals-new">
      <h1>New Meal</h1>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-2 col-6">
            <label htmlFor="mealName" className="form-label">
              Name
            </label>
            <input
              name="name"
              type="text"
              className="form-control"
              id="mealName"
              required
            />
          </div>
          <div className="mb-2 col-6">
            <label htmlFor="mealPicture" className="form-label">
              Picture
            </label>
            <input
              name="picture"
              type="text"
              className="form-control"
              id="mealPicture"
              required
            />
          </div>
          <button className="btn btn-success" type="submit">
            Create Meal
          </button>
        </div>
      </form>
    </div>
  );
}
