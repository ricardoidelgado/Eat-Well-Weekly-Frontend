import axios from "axios";
import { useState, useEffect } from "react";
import { IngredientsIndex } from "./IngredientsIndex";

export function Content() {
  const [ingredients, setIngredients] = useState([]);

  const handleIndexIngredients = () => {
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      setIngredients(response.data);
    });
  };

  useEffect(handleIndexIngredients, []);

  return (
    <div>
      <IngredientsIndex ingredients={ingredients} />
    </div>
  );
}
