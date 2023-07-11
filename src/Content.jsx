// Set Up
import axios from "axios";
import { useState, useEffect } from "react";
import { Modal } from "./Modal";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";

// Home
import { Home } from "./Home";

// Ingredients
import { IngredientsIndex } from "./IngredientsIndex";
import { IngredientsShow } from "./IngredientsShow";
import { IngredientsNew } from "./IngredientsNew";

// Meals
import { MealsIndex } from "./MealsIndex";
import { MealsShowPage } from "./MealsShowPage";
import { MealsNew } from "./MealsNew";

// Meal Ingredients
import { MealIngredientsNew } from "./MealIngredientsNew";
import { MealIngredientsShow } from "./MealIngredientsShow";

// Login/Signup
import LoginSignup from "./LoginSignup";

export function Content() {
  // Ingredients
  const [ingredients, setIngredients] = useState([]);
  const [isIngredientsShowVisible, setIsIngredientsShowVisible] = useState(false);
  const [currentIngredient, setCurrentIngredient] = useState({});
  const [isIngredientsNewVisible, setIsIngredientsNewVisible] = useState(false);

  const handleIndexIngredients = () => {
    axios.get("http://localhost:3000/ingredients.json").then((response) => {
      setIngredients(response.data);
    });
  };

  const handleShowIngredient = (ingredient) => {
    setIsIngredientsShowVisible(true);
    setCurrentIngredient(ingredient);
  };

  const handleNewIngredient = () => {
    setIsIngredientsNewVisible(true);
  };

  const handleCreateIngredient = (params, successCallback) => {
    axios.post("http://localhost:3000/ingredients.json", params).then((response) => {
      setIngredients([...ingredients, response.data]);
      successCallback();
    });
  };

  const handleUpdateIngredient = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/ingredients/${id}.json`, params).then((response) => {
      setIngredients(
        ingredients.map((ingredient) => {
          if (ingredient.id === response.data.id) {
            return response.data;
          } else {
            return ingredient;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyIngredient = (ingredient) => {
    axios.delete(`http://localhost:3000/ingredients/${ingredient.id}.json`).then(() => {
      setIngredients(ingredients.filter((i) => i.id !== ingredient.id));
      handleClose();
    });
  };

  useEffect(handleIndexIngredients, []);

  // Meals
  const [meals, setMeals] = useState([]);
  const [currentMeal, setCurrentMeal] = useState({});
  const navigate = useNavigate();

  const handleIndexMeals = () => {
    axios.get("http://localhost:3000/meals.json").then((response) => {
      setMeals(response.data);
    });
  };

  const handleCreateMeal = (params) => {
    axios.post("http://localhost:3000/meals.json", params).then((response) => {
      const newMeal = response.data;
      setMeals([...meals, newMeal]);
    });
  };

  const handleUpdateMeal = (id, params) => {
    axios.patch(`http://localhost:3000/meals/${id}.json`, params).then((response) => {
      const updatedMeal = response.data;
      setMeals(
        meals.map((meal) => {
          if (meal.id === updatedMeal.id) {
            return updatedMeal;
          } else {
            return meal;
          }
        })
      );
      navigate("/meals");
    });
  };

  const handleDestroyMeal = (meal) => {
    axios.delete(`http://localhost:3000/meals/${meal.id}.json`).then(() => {
      setMeals(meals.filter((m) => m.id !== meal.id));
      navigate("/meals");
    });
  };

  useEffect(handleIndexMeals, []);

  // MealIngredients
  const [mealIngredients, setMealIngredients] = useState([]);
  const [isMealIngredientsModalVisible, setIsMealIngredientsModalVisible] = useState(false);
  const [currentMealIngredient, setCurrentMealIngredient] = useState({});

  const handleCreateMealIngredient = (params, successCallback) => {
    axios.post("http://localhost:3000/meal_ingredients.json", params).then((response) => {
      setMealIngredients(...mealIngredients, response.data);
      successCallback;
    });
  };

  const handleUpdateMealIngredient = (id, params, successCallback) => {
    axios.patch(`http://localhost:3000/meal_ingredients/${id}.json`, params).then((response) => {
      setMealIngredients(
        mealIngredients.map((mealIngredient) => {
          if (mealIngredient.id === response.data.id) {
            return response.data;
          } else {
            return mealIngredient;
          }
        })
      );
      successCallback();
      handleClose();
    });
  };

  const handleDestroyMealIngredient = (mealIngredient) => {
    axios.delete(`http://localhost:3000/meal_ingredients/${mealIngredient.id}.json`).then(() => {
      setMealIngredients(mealIngredients.filter((mI) => mI.id !== mealIngredient.id));
      handleClose();
    });
  };

  const handleShowMealIngredient = (mealIngredient, meal) => {
    setIsMealIngredientsModalVisible(true);
    setCurrentMealIngredient(mealIngredient);
    setCurrentMeal(meal);
  };

  // Shared
  const handleClose = () => {
    setIsIngredientsShowVisible(false);
    setIsIngredientsNewVisible(false);
    setIsMealIngredientsModalVisible(false);
  };

  // Ingredients Output Logic
  let modalOutput;
  let visibility;

  if (isIngredientsNewVisible) {
    modalOutput = <IngredientsNew onCreateIngredient={handleCreateIngredient} />;
    visibility = isIngredientsNewVisible;
  } else if (isIngredientsShowVisible) {
    modalOutput = (
      <IngredientsShow
        ingredient={currentIngredient}
        onUpdateIngredient={handleUpdateIngredient}
        onDestroyIngredient={handleDestroyIngredient}
      />
    );
    visibility = isIngredientsShowVisible;
  } else if (isMealIngredientsModalVisible) {
    modalOutput = (
      <MealIngredientsShow
        mealIngredient={currentMealIngredient}
        onUpdateMealIngredient={handleUpdateMealIngredient}
        onDestroyMealIngredient={handleDestroyMealIngredient}
        meal={currentMeal}
      />
    );
    visibility = isMealIngredientsModalVisible;
  }

  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login-signup" element={<LoginSignup />} />
        <Route
          path="/ingredients"
          element={
            <IngredientsIndex
              ingredients={ingredients}
              onShowIngredient={handleShowIngredient}
              onNewIngredient={handleNewIngredient}
            />
          }
        />
        <Route path="/meals" element={<MealsIndex meals={meals} />} />
        <Route
          path="/meals/:id"
          element={
            <MealsShowPage
              onUpdateMeal={handleUpdateMeal}
              onDestroyMeal={handleDestroyMeal}
              onShowMealIngredient={handleShowMealIngredient}
            />
          }
        />
        <Route path="/meals/new" element={<MealsNew onCreateMeal={handleCreateMeal} />} />
      </Routes>
      <MealIngredientsNew onCreateMealIngredient={handleCreateMealIngredient} />
      <Modal show={visibility} onClose={handleClose}>
        {modalOutput}
      </Modal>
    </div>
  );
}
