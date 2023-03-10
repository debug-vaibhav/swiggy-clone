/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "../../components/topnav/topnav";
import styles from "./main.module.scss";

const MainLayout = () => {
  return (
    <div className={styles["wrapper"]}>
      <Topnav />
      <Outlet />
    </div>
  );
};

export default MainLayout;
