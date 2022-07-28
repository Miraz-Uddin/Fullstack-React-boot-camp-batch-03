import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";
// import Nav from "./components/Nav";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Nav /> */}
      <Counter />
    </>
  );
}

export default App;
