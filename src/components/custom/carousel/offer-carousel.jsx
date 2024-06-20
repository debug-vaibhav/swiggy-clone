import React from "react";
import styles from "./offer-carousel.module.scss";

import Carousel from "./carousel";

const OfferCarousel = ({ header, data }) => {
  return (
    <Carousel header={header}>
      {data.map((item, index) => {
        return (
          <div key={index} className={styles["item"]}>
            <img src={item.category} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default OfferCarousel;
