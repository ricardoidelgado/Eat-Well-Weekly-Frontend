import { Modal } from "./Modal";
import { IngredientsNew } from "./IngredientsNew";

export function IngredientsIndex(props) {
  return (
    <div id="ingredients-index">
      <h1>All Ingredients</h1>
      <button type="button" className="btn btn-success" onClick={() => props.onNewIngredient()}>
        Create New Ingredient
      </button>
      {props.ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          <h2>{ingredient.name}</h2>
          <img src={ingredient.picture} />
          <p>Calories: {ingredient.calories}</p>
          <button type="button" className="btn btn-primary" onClick={() => props.onShowIngredient(ingredient)}>
            More Info
          </button>
        </div>
      ))}
      <Modal show={props.show} onClose={props.onClose}>
        <IngredientsNew onCreateIngredient={props.onCreateIngredient} />
      </Modal>
    </div>
  );
}
