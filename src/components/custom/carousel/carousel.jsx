import React, { useState, useEffect, useRef } from "react";
import styles from "./carousel.module.scss";

const Carousel = ({ header, children }) => {
  const carouselContainer = useRef(null);
  const [disableLeftScroll, setDisableLeftScroll] = useState(true);
  const [disableRightScroll, setDisableRightScroll] = useState(false);

  const enableScrollHandles = () => {
    const clientWidth = carouselContainer.current.clientWidth;
    const element = carouselContainer.current;
    if (element.scrollLeft <= 0) {
      setDisableLeftScroll(true);
    } else {
      setDisableLeftScroll(false);
    }
    if (element.scrollLeft >= clientWidth) {
      setDisableRightScroll(true);
    } else {
      setDisableRightScroll(false);
    }
  };

  const handleScroll = (isLeft) => {
    const clientWidth = carouselContainer.current.clientWidth;
    const element = carouselContainer.current;
    element.scrollLeft += clientWidth * 0.2 * (isLeft ? -1 : 1);
    enableScrollHandles();
  };

  useEffect(() => {
    const element = carouselContainer.current;
    if (element) {
      element.addEventListener("scroll", enableScrollHandles);
    }

    return () => {
      if (element) {
        element.removeEventListener("scroll", enableScrollHandles);
      }
    };
  }, []);

  return (
    <div className={styles["carousel"]}>
      <div className={styles["carousel__scroller"]}>
        <h3 className={styles["carousel__header"]}>{header}</h3>
        <div className={styles["carousel__btns"]}>
          <button
            className={`btn ${styles["scroll-left"]}`}
            disabled={disableLeftScroll}
            onClick={() => {
              handleScroll(true);
            }}
          >
            <i className="fa-solid fa-arrow-left-long fa-lg"></i>
          </button>
          <button
            className={`btn ${styles["scroll-right"]}`}
            disabled={disableRightScroll}
            onClick={() => {
              handleScroll(false);
            }}
          >
            <i className="fa-solid fa-arrow-right-long fa-lg"></i>
          </button>
        </div>
      </div>
      <div ref={carouselContainer} className={styles["carousel__content"]}>
        {children}
      </div>
    </div>
  );
};

export default Carousel;
