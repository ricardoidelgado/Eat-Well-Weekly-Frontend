import { useNavigate } from "react-router-dom";

export function MealsNew(props) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateMeal(params);
    event.target.reset();
    navigate("/");
  };
  return (
    <div id="meals-new">
      <h1>New Meal</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" type="text" />
        </div>
        <div>
          Picture: <input name="picture" type="text" />
        </div>
        <button type="submit">Create Meal</button>
      </form>
    </div>
  );
}
