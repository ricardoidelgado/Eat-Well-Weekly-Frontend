export function MealsIndex(props) {
  return (
    <div>
      <h1>All Meals</h1>
      {props.meals.map((meal) => (
        <div key={meal.id}>
          <h2>{meal.name}</h2>
          <img src={meal.picture} />
        </div>
      ))}
    </div>
  );
}
