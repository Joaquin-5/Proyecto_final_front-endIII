import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail.jsx";
import Favs from "./Routes/Favs.jsx";
import Contact from "./Routes/Contact.jsx";
import "./App.css";

function App() {
  useEffect(() => {
    const body = document.body;
    const theme = localStorage.getItem("theme");

    if (theme === "light") {
      localStorage.setItem("theme", "dark");
      body.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      body.classList.remove("dark");
    }
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favs" element={<Favs />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
