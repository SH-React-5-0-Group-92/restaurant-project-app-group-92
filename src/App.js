import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from './components/Home'
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      {/* <Route exact path="/components/About" element={<About />}></Route> */}
      <Route path="/Products" element={<Products />}/>
      </Routes>
    </Router>
  );
}

export default App;
