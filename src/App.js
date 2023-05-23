import React from "react";
import "./App.css";
import Homescreen from "./screens/Homescreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loginscreen from "./screens/Loginscreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Loginscreen />} />
          <Route exact path="/" element={<Homescreen />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
