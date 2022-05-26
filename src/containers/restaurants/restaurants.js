/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import styles from "./restaurants.module.scss";
import data from "./data.json";

const Restaurants = () => {
  return (
    <div>
      <div className={styles["offers-container"]}>
        <section className="container">
          <button className={`btn ${styles["scroll-left"]}`}>
            <i className="fa-solid fa-arrow-left-long fa-lg"></i>
          </button>
          <button className={`btn ${styles["scroll-right"]}`}>
            <i className="fa-solid fa-arrow-right-long fa-lg"></i>
          </button>
          {data.offers.map((offer, index) => {
            return (
              <div key={index} className={styles["offer-container"]}>
                <img src={offer.offer} alt="offer" />
              </div>
            );
          })}
        </section>
      </div>
      <div className={`container ${styles["restaurants-container"]}`}>
        <div className={styles["filters-container"]}>
          <h2>234 restaurants</h2>
          <div className={styles["quick-main-filter-container"]}>
            <div className={styles["quick-filter-container"]}>
              <div>
                <span>Relevance</span>
              </div>
              <div>
                <span>Delivery Time</span>
              </div>
              <div>
                <span>Rating</span>
              </div>
              <div>
                <span>Cost: Low To High</span>
              </div>
              <div>
                <span>Cost: High To Low</span>
              </div>
            </div>
            <div className={styles["main-filter-container"]}>
              <span>Filters</span>
              <div>
                <i className="fa-solid fa-arrow-up-a-z"></i>
              </div>
            </div>
          </div>
        </div>
        <div className={styles["resto-list-container"]}>
          {[
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2,
            3, 4,
          ].map((i, index) => {
            let restaurant = data.restaurants[i];
            return (
              <a href="#" key={index}>
                <div className={styles["resto-wrapper"]}>
                  <div key={index} className={styles["resto-container"]}>
                    <img
                      src={"/assets/images/resto-" + i + ".png"}
                      alt="resto-1"
                    />
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.cuisines}</p>
                    <div className={styles["details-container"]}>
                      <div className={styles["rating-container"]}>
                        <i className="fa-solid fa-star"></i>
                        <span>4.4</span>
                      </div>
                      <div className={styles["separator"]}></div>
                      <div className={styles["delivery-container"]}>
                        <span>25 MINS</span>
                      </div>
                      <div className={styles["separator"]}></div>
                      <div className={styles["cost-container"]}>
                        <i className="fa-solid fa-indian-rupee-sign"></i>
                        350 FOR TWO
                      </div>
                    </div>
                    <div className={styles["discount-container"]}>
                      <div className={styles["icon-container"]}>
                        <i className="fa-solid fa-certificate fa-lg"></i>
                        <span>%</span>
                      </div>
                      <span>50% off | Use WELCOME50</span>
                    </div>
                  </div>
                  <div className={styles["quick-view-container"]}>
                    <span>QUICK VIEW</span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
