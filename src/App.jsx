import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeLayout from "./pages/home/home.layout";
import MainLayout from "./pages/main/main.layout";
import MobileLayout from "./pages/mobile/mobile.layout";
import ErrorLayout from "./pages/error/error.layout";
import Restaurants from "./containers/restaurants/restaurants";
import Restaurant from "./components/custom/restaurant/restaurant";
import Footer from "./components/custom/footer/footer";
import Auth from "./containers/auth/auth";
import Search from "./containers/search/search";
import Toaster from "./components/ui/toaster/toaster";
import { AuthContextProvider } from "./contexts/auth";
import { SearchContextProvider } from "./contexts/search";
import { UserContextProvider } from "./contexts/user";
import { CartContextProvider } from "./contexts/cart";
import { ToasterContextProvider } from "./contexts/toaster";

import "./styles/index.scss";

const App = () => {
  return (
    <React.StrictMode>
      <ToasterContextProvider>
        <SearchContextProvider>
          <AuthContextProvider>
            <UserContextProvider>
              <CartContextProvider>
                <div className="desktop-only">
                  <Router>
                    <Routes>
                      <Route path="/" index element={<HomeLayout />} />
                      <Route path="/" element={<MainLayout />}>
                        <Route path="restaurants" element={<Restaurants />} />
                        <Route
                          path="restaurants/:restaurantId"
                          element={<Restaurant />}
                        />
                      </Route>
                      <Route path="*" element={<ErrorLayout />} />
                    </Routes>
                    <Footer />
                    <Auth />
                    <Search />
                  </Router>
                </div>
                <Toaster />
                <div className="mobile-only">
                  <MobileLayout />
                </div>
              </CartContextProvider>
            </UserContextProvider>
          </AuthContextProvider>
        </SearchContextProvider>
      </ToasterContextProvider>
    </React.StrictMode>
  );
};

export default App;
