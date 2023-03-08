/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "../../components/topnav/topnav";

const MainLayout = () => {
  return (
    <div className="wrapper">
      <Topnav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
