import React from "react";
import FingerPrintReport from "./components/FingerPrintReport";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReportCard from "./components/ReportCard";
import AllReport from "./components/AllReport";
import Home from "./components/Home";
import Login from "../pages/Auth/Login";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

          <Route path="/allReports" element={<AllReport />} />
          <Route path="/form/:id" element={<FingerPrintReport />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
