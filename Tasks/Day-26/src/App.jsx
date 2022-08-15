import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home";

function App() {
  // Funky Promotional
  console.log(
    "%cWhat are you doing here?! you sneaky developer...",
    "color: #b432ff"
  );
  console.log(
    "%cDM me 👉 https://www.facebook.com/miraz.uddin.7773631",
    "color: #b432ff"
  );
  console.log("%c— Miraz Vai", "color: #777777");

  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
