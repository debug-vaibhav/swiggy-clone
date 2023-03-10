import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/home/home.layout";
import MainLayout from "./pages/main/main.layout";
import MobileLayout from "./pages/mobile/mobile.layout";
import ErrorLayout from "./pages/error/error.layout";
import Restaurants from "./containers/restaurants/restaurants";
import Restaurant from "./components/cards/restaurant/restaurant";
import "./styles/index.scss";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="desktop-only">
      <Router>
        <Routes>
          <Route path="/" index element={<HomeLayout />} />
          <Route path="/" element={<MainLayout />}>
            <Route path="restaurants" element={<Restaurants />} />
            <Route path="restaurants/:restaurantId" element={<Restaurant />} />
          </Route>
          <Route path="*" element={<ErrorLayout />} />
        </Routes>
      </Router>
    </div>
    <div className="mobile-only">
      <MobileLayout />
    </div>
  </React.StrictMode>
);
