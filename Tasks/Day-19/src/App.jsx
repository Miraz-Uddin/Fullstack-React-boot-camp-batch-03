import { useState } from "react";
import "./App.css";
import Banner from "./components/Banner";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Nav />
      <Home />
      <Banner />
    </>
  );
}

export default App;
