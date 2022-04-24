import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <Route exact path="/" element={<Home />}></Route>
      <Route exact path="/components/About" element={<About />}></Route>
    </Router>
  );
}

export default App;
