import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Routes/Home.jsx";
import Detail from "./Routes/Detail.jsx";
import Favs from "./Routes/Favs.jsx";
import Contact from "./Routes/Contact.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/home" element={<Home />} />
      <Route path="/favs" element={<Favs />} />
      <Route path="/contacto" element={<Contact />} />
    </Routes> 
  );
}

export default App;
