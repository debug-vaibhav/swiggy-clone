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
          <img src="/assets/icons/cart.svg" alt="" />
          <span>Cart</span>
        </li>
        <li>
          <img src="/assets/icons/user.svg" alt="" />
          <span>Sign In</span>
        </li>
        <li>
          <img src="/assets/icons/help.svg" alt="" />
          <span>Help</span>
        </li>
        <li>
          <img src="/assets/icons/offer.svg" alt="" />
          <span>Offers</span>
          <span className={styles["offer-link"]}>NEW</span>
        </li>
        <li>
          <img src="/assets/icons/search.svg" alt="" />
          <span>Search</span>
        </li>
      </ul>
    </nav>
  );
};

export default Topnav;
