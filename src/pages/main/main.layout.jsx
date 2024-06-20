/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "../../components/custom/topnav/topnav";
import styles from "./main.module.scss";

const MainLayout = () => {
  return (
    <div className={styles["main-container"]}>
      <Topnav />
      <div className={styles["outlet-container"]}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
