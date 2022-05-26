/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./topnav.module.scss";

const Topnav = () => {
  return (
    <nav className="container">
      <a href="#">
        <img src="/assets/images/icon.png" alt="swiggy" />
      </a>
      <div className={styles["location-container"]}>
        <span>Other</span>
        <span>Nashik, Maharashtra, India</span>
        <span>
          <i className="fa-solid fa-chevron-down fa-lg" />
        </span>
      </div>
      <ul>
        <li>
          <i className="fa-solid fa-inbox fa-lg"></i>
          <span>Cart</span>
        </li>
        <li>
          <i className="fa-solid fa-arrow-right-to-bracket fa-lg"></i>
          <span>Sign In</span>
        </li>
        <li>
          <i className="fa-solid fa-info fa-lg"></i>
          <span>Help</span>
        </li>
        <li>
          <i className="fa-solid fa-percent fa-lg"></i>
          <span>Offers</span>
          <span className={styles["offer-link"]}>NEW</span>
        </li>
        <li>
          <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          <span>Search</span>
        </li>
      </ul>
    </nav>
  );
};

export default Topnav;
