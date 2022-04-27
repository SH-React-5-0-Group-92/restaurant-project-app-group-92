import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Products from "./components/Products";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/About" element={<About />}></Route>
        <Route exact path="/Products" element={<Products />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
