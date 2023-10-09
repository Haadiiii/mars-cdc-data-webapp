import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataVisualization from "./components/DataVisualization";
import FilterForm from "./components/FilterForm";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DataVisualization />} />
        <Route path="/filter" element={<FilterForm />} />
      </Routes>
    </Router>
  );
}

export default App;
