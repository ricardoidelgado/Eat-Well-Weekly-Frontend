import { Header } from "./Header";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { BrowserRouter } from "react-router-dom";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function App() {
  const [user, setUser] = useState({});
  const params = useParams();

  const handleShowUser = () => {
    axios.get(`/users/${params.id}.json`).then((response) => {
      setUser(response.data);
    });
  };

  useEffect(handleShowUser, []);

  return (
    <div>
      <BrowserRouter>
        <Header user={user} />
        <Content user={user} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
