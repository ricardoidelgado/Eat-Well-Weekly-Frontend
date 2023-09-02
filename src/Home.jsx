export function Home() {
  return (
    <div id="home" className="row">
      <h1 className="home-headers">Welcome to Eat Well Weekly</h1>
      <div className="col-12">
        <img
          id="home-image"
          src="https://images.unsplash.com/photo-1615937722923-67f6deaf2cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZGlubmVyJTIwdGFibGV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
        />
      </div>
      <h4 className="col-12 mt-3 home-headers">Organize your meals!</h4>
      <h5 className="col-4 home-headers">Select your Ingredients</h5>
      <h5 className="col-4 home-headers">Assemble your Meal</h5>
      <h5 className="col-4 home-headers">Organize Your Daily Meal Plan</h5>
      <div className="col-4">
        <div className="card w-100">
          <img
            src="https://images.unsplash.com/photo-1618194696460-202623a57e02?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGJyZWFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60"
            className="card-img-top"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Wheat Bread</h5>
            <p className="card-text">Serving Size: 1 Slice</p>
            <p className="card-text">Calories: 100</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card w-100">
          <img
            src="https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            className="card-img-top"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">Grilled Cheese</h5>
            <p className="card-text">Calories: 500</p>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="card w-100 h-100">
          <div className="card-body pt-1">
            <h5 className="card-title home-headers">Breakfast: Pancakes</h5>
            <img
              src="https://images.unsplash.com/photo-1528207776546-365bb710ee93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="home-dmp-images"
            />
            <h5 className="card-title home-headers">Lunch: Grilled Cheese</h5>
            <img
              src="https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JpbGxlZCUyMGNoZWVzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
              className="home-dmp-images"
            />
            <h5 className="card-title home-headers">Dinner: Pizza</h5>
            <img
              src="https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
              className="home-dmp-images"
            />
          </div>
        </div>
      </div>
      <h4 className="col-12 mt-3 home-headers">
        You can also go one step farther and organize your meals for an entire
        week!
      </h4>
    </div>
  );
}
