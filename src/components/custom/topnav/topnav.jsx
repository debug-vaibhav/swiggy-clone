/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import AuthContext from "../../../contexts/auth";
import SearchContext from "../../../contexts/search";
import styles from "./topnav.module.scss";

const Topnav = () => {
  const { setShowAuth } = useContext(AuthContext);
  const { setShowSearch } = useContext(SearchContext);

  const auth = (type) => {
    setShowAuth({ visible: true, type: type });
  };

  const search = () => {
    setShowSearch({ visible: true });
  };

  return (
    <header>
      <nav className={styles["nav"]}>
        <a className={styles["nav--image-link"]} href="#">
          <img src="/assets/images/icon.png" alt="swiggy" />
        </a>
        <div className={styles["nav--location-container"]}>
          <span
            className={styles["nav--location-container--type"]}
            onClick={search}
          >
            Other
          </span>
          <span className={styles["nav--location-container--location"]}>
            Nashik, Maharashtra, India
          </span>
          <span className={styles["nav--location-container--icon"]}>
            <i className="fa-solid fa-chevron-down fa-lg" />
          </span>
        </div>
        <ul className={styles["links"]}>
          <li className={styles["links--link"]}>
            <img src="/icons/cart.svg" alt="" />
            <span className={styles["links--link--text"]}>Cart</span>
          </li>
          <li className={styles["links--link"]} onClick={() => auth("login")}>
            <img src="/icons/user.svg" alt="" />
            <span className={styles["links--link--text"]}>Sign In</span>
          </li>
          <li className={styles["links--link"]}>
            <img src="/icons/help.svg" alt="" />
            <span className={styles["links--link--text"]}>Help</span>
          </li>
          <li className={styles["links--link"]}>
            <img src="/icons/offer.svg" alt="" />
            <span className={styles["links--link--text"]}>Offers</span>
            <span className={styles["links--link__offer"]}>NEW</span>
          </li>
          <li className={styles["links--link"]}>
            <img src="/icons/search.svg" alt="" />
            <span className={styles["links--link--text"]}>Search</span>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Topnav;
