import React from "react";
import { Routes, Route } from "react-router-dom";
import Employees from "./containers/Employees";
import Signup from "./containers/Signup";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Signup />} />
      <Route path="/employees" element={<Employees />} />
    </Routes>
  );
};

export default App;
