import React from "react";
import styles from "./topchains-carousel.module.scss";

import Carousel from "./carousel";

const TopChainsCarousel = ({ header, data }) => {
  return (
    <Carousel header={header}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles["item"]}>
            <div className={styles["item__image"]}>
              <img src={item.image} alt="" />
              <div className={styles["item__image__overlay"]}>{item.offer}</div>
            </div>
            <div className={styles["item__details"]}>
              <span className={styles["item__name"]}>{item.name}</span>
              <div className={styles["item__meta-info"]}>
                <div className={styles["item__meta-info__rating"]}>
                  <img src="/icons/green-star.png" alt="" />
                  <span className={styles["ratings"]}>{item.rating}</span>
                </div>
                <span className={styles["separator"]}>-</span>
                <span className={styles["delivery-time"]}>
                  {item.deliveryTime} mins
                </span>
              </div>
              <p className={styles["item__category"]}>{item.category}</p>
              <p className={styles["item__address"]}>{item.address}</p>
            </div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TopChainsCarousel;
