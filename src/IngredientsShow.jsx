export function IngredientsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateIngredient(props.ingredient.id, params, () => event.target.reset());
  };

  const handleClick = () => {
    props.onDestroyIngredient(props.ingredient);
  };

  return (
    <div id="ingredients-show">
      <h2>{props.ingredient.name}</h2>
      <img src={props.ingredient.picture} />
      <h3 className="mt-3">Nutritional Summary</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Category</th>
            <th scope="col">Ingredient Total</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <td>Calories</td>
            <td>{props.ingredient?.calories}</td>
          </tr>
          <tr>
            <td>Fat</td>
            <td>{props.ingredient?.fat}</td>
          </tr>
          <tr>
            <td>Sodium</td>
            <td>{props.ingredient?.sodium}</td>
          </tr>
          <tr>
            <td>Carbs</td>
            <td>{props.ingredient?.carbs}</td>
          </tr>
          <tr>
            <td>Protein</td>
            <td>{props.ingredient?.protein}</td>
          </tr>
          <tr>
            <td>Sugar</td>
            <td>{props.ingredient?.sugar}</td>
          </tr>
          <tr>
            <td>Cholesterol</td>
            <td>{props.ingredient?.cholesterol}</td>
          </tr>
        </tbody>
      </table>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={props.ingredient.name} name="name" type="text" />
        </div>
        <div>
          Picture: <input defaultValue={props.ingredient.picture} name="picture" type="text" />
        </div>
        <div>
          Calories: <input defaultValue={props.ingredient.calories} name="calories" type="integer" />
        </div>
        <div>
          Fat: <input defaultValue={props.ingredient.fat} name="fat" type="integer" />
        </div>
        <div>
          Sodium: <input defaultValue={props.ingredient.sodium} name="sodium" type="integer" />
        </div>
        <div>
          Carbs: <input defaultValue={props.ingredient.carbs} name="carbs" type="integer" />
        </div>
        <div>
          Protein: <input defaultValue={props.ingredient.protein} name="protein" type="integer" />
        </div>
        <div>
          Sugar: <input defaultValue={props.ingredient.sugar} name="sugar" type="integer" />
        </div>
        <div>
          Cholesterol: <input defaultValue={props.ingredient.cholesterol} name="cholesterol" type="integer" />
        </div>
        <button className="btn btn-warning" type="submit">
          Update Ingredient
        </button>
      </form>
      <button className="btn btn-danger" onClick={handleClick}>
        Delete Ingredient
      </button>
    </div>
  );
}
