import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { MainWrapper } from "./components/content/main-wrapper";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainWrapper />} />
      </Routes>
    </Router>
  );
}

export default App;