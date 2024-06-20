/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import AuthContext from "../../contexts/auth";
import data from "./data.json";
import styles from "./home.module.scss";

const HomeLayout = () => {
  const { setShowAuth } = useContext(AuthContext);

  const auth = (type) => {
    setShowAuth({ visible: true, type: type });
  };

  return (
    <>
      <div className={styles["delivery"]}>
        <div className={`container ${styles["delivery__container"]}`}>
          <div className={styles["delivery__main"]}>
            <div className={styles["delivery__logo"]}>
              <img src="/assets/images/logo.png" alt="Swiggy" />
            </div>
            <div className={styles["delivery__auth"]}>
              <button
                className="btn btn--default"
                onClick={() => auth("login")}
              >
                <span>Login</span>
              </button>
              <button className="btn btn--dark" onClick={() => auth("signup")}>
                <span>Sign up</span>
              </button>
            </div>
          </div>
          <div className={styles["delivery__search"]}>
            <h2>Unexpected guests ?</h2>
            <p>Order food from favourite restaurants near you.</p>
            <div className={styles["delivery__search-container"]}>
              <div className={styles["delivery__search-wrapper"]}>
                <input
                  className={styles["delivery__search__input"]}
                  type="text"
                  placeholder="Enter your delivery location"
                />
              </div>
              <button className="btn btn--primary">
                <span>FIND&nbsp;FOOD</span>
              </button>
            </div>
            <p className={styles["delivery__search__header"]}>
              POPULAR CITIES IN INDIA
            </p>
            <ul>
              {data.popularCities.map((city, index) => {
                return (
                  <li key={index}>
                    <a href="#">{city}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className={styles["delivery__backgroud"]}></div>
      </div>
      <div className={styles["features"]}>
        <div className={`container ${styles["features__container"]}`}>
          {data.features.map((feature, index) => {
            return (
              <div key={index} className={styles["features__item"]}>
                <div className={styles["features__img"]}>
                  <img src={feature.image} alt={feature.header} />
                </div>
                <h2>{feature.header}</h2>
                <p>{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles["mobile-app"]}>
        <div className={`container ${styles["mobile-app__container"]}`}>
          <div className={styles["mobile-app__info"]}>
            <h1>Restaurants in your pocket</h1>
            <p>
              Order from your favorite restaurants & track on the go, with the
              all-new Swiggy app.
            </p>
            <div className={styles["mobile-app__link"]}>
              <img
                src="/assets/images/google-play.png"
                alt="Google Playstore"
              />
              <img src="/assets/images/app-store.png" alt="App store" />
            </div>
          </div>
          <div className={styles["mobile-app__img"]}>
            <img src="/assets/images/pixel.png" alt="app-ref-1" />
            <img src="/assets/images/iphone.png" alt="app-ref-1" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
