/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Auth from "../auth/auth";
import data from "./data.json";
import styles from "./landing.module.scss";

const Locations = ({ locations }) => {
  const size = parseInt(locations.length / 4);
  let index = 0;
  return [0, 1, 2, 3].map((i) => {
    const arr = locations.slice(index, index + size);
    index += size;
    return (
      <ul key={i}>
        {arr.map((location, index) => {
          return <li key={index}>{location}</li>;
        })}
      </ul>
    );
  });
};

const Landing = () => {
  const [showAuth, setShowAuth] = useState({ visible: false, type: "login" });

  const openAuthModal = (type) => {
    setShowAuth({ visible: true, type: type });
    document.body.className = "overlay-enabled overlay-no-margin";
  };

  return (
    <div className="wrapper">
      <div className={styles["landing-wrapper"]}>
        <div className={styles["location-background-section"]}>
          <div className={`container ${styles["location-section"]}`}>
            <div className={styles["header-container"]}>
              <div className={styles["logo-container"]}>
                <img src="/assets/images/logo.png" alt="Swiggy" />
              </div>
              <div className={styles["auth-action-container"]}>
                <button
                  className="btn btn-default"
                  onClick={() => openAuthModal("login")}
                >
                  <span>Login</span>
                </button>
                <button
                  className="btn btn-dark"
                  onClick={() => openAuthModal("signup")}
                >
                  <span>Sign up</span>
                </button>
              </div>
            </div>
            <div className={styles["search-location-section"]}>
              <h2>Unexpected guests ?</h2>
              <p>Order food from favourite restaurants near you.</p>
              <div className={styles["search-location-input-container"]}>
                <div className={styles["input-wrapper"]}>
                  <input
                    className="form-input"
                    type="text"
                    placeholder="Enter your delivery location"
                  />
                </div>
                <button className="btn btn-primary">
                  <span>FIND&nbsp;FOOD</span>
                </button>
              </div>
              <p className={styles["popular-city-header"]}>
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
          <div className={styles["backgroud-section"]}></div>
        </div>
        <div className={styles["features-section"]}>
          <div className={`container ${styles["features-container"]}`}>
            {data.features.map((feature, index) => {
              return (
                <div key={index} className={styles["feature-container"]}>
                  <div className={styles["feature-img-wrapper"]}>
                    <img src={feature.image} alt={feature.header} />
                  </div>
                  <h2>{feature.header}</h2>
                  <p>{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles["mobile-app-section"]}>
        <div className={`container ${styles["mobile-app-container"]}`}>
          <div className={styles["info-container"]}>
            <h1>Restaurants in your pocket</h1>
            <p>
              Order from your favorite restaurants & track on the go, with the
              all-new Swiggy app.
            </p>
            <div className={styles["app-link-container"]}>
              <img
                src="/assets/images/google-play.png"
                alt="Google Playstore"
              />
              <img src="/assets/images/app-store.png" alt="App store" />
            </div>
          </div>
          <div className={styles["img-container"]}>
            <img src="/assets/images/pixel.png" alt="app-ref-1" />
            <img src="/assets/images/iphone.png" alt="app-ref-1" />
          </div>
        </div>
      </div>
      <div className={styles["footer-section"]}>
        <div className="container">
          <div className={styles["footer-main-section"]}>
            {data.footer.links.map((link, index) => {
              return (
                <div key={index} className={styles["footer-section"]}>
                  <h3>{link.category}</h3>
                  <ul>
                    {link.items.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
            <div className={styles["mobile-app-link-section"]}>
              <img
                src="/assets/images/google-play.png"
                alt="Google Playstore"
              />
              <img src="/assets/images/app-store.png" alt="App store" />
            </div>
          </div>
          <hr />
          <div className={styles["delivery-location-section"]}>
            <h3>WE DELIVER TO</h3>
            <div className={styles["locations-list-section"]}>
              <Locations locations={data.footer.locations} />
            </div>
          </div>
        </div>
      </div>
      {showAuth && <Auth showAuth={showAuth} setShowAuth={setShowAuth} />}
    </div>
  );
};

export default Landing;
