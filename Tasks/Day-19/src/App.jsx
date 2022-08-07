import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
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
