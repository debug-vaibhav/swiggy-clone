import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/landing/landing";
import Restaurants from "./pages/restaurants/restaurants";
import Error from "./pages/error/error";
import "./styles/index.scss";

// TODO: divide into components and create data.json for component (if required)
// TODO: hide scrollbar in firefox not working
// TODO: need to check responsiveness and zoom-in annd zoom-out situations and orientation change issues

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="desktop-only">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
    <div className="mobile-only"></div>
  </React.StrictMode>
);
