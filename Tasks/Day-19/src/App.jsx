import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import "../node_modules/slick-carousel/slick/slick-theme.css";
import "../node_modules/slick-carousel/slick/slick.css";
import "./App.css";
import Home from "./components/Home";
import Navigator from "./components/Navigator";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navigator />
      <Home />
    </>
  );
}

export default App;
