import React, { useState, useEffect, useRef } from "react";
import data from "./data.json";
import styles from "./list.module.scss";

const Lists = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [list, setList] = useState([]);
  const filtersContainer = useRef(null);
  const listContainer = useRef(null);

  useEffect(() => {
    const offsetTop = filtersContainer.current.offsetTop;
    const handleFilterPosition = () => {
      setIsSticky(window.scrollY > offsetTop);
    };
    window.addEventListener("scroll", handleFilterPosition);
    return () => {
      window.removeEventListener("scroll", handleFilterPosition);
    };
  }, []);

  // useEffect(() => {
  //   const populateRestaurants = () => {
  //     if (listContainer) {
  //       let offsetBottom =
  //         listContainer.current.offsetTop + listContainer.current.offsetHeight;
  //       if (window.scrollY > offsetBottom * 0.9) {
  //         setLoading(true);
  //         setTimeout(() => {
  //           setList((chains) => {
  //             return [...chains, ...data.topChains];
  //           });
  //           setLoading(false);
  //         }, 2000);
  //         offsetBottom =
  //           listContainer.current.offsetTop +
  //           listContainer.current.offsetHeight;
  //       }
  //     }
  //   };
  //   window.addEventListener("scroll", populateRestaurants);
  //   return () => {
  //     window.removeEventListener("scroll", populateRestaurants);
  //   };
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setList(data.topChains);
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className={styles["restaurants"]}>
      <h3 className={styles["restaurants__header"]}>
        Restaurants with online food delivery in Pune
      </h3>
      <div
        ref={filtersContainer}
        className={`${styles["restaurants__filters"]} ${
          isSticky && styles["filters-sticky"]
        }`}
      >
        <div className={styles["restaurants__filters-wrapper"]}>
          <div className={styles["filter-container"]}>
            <span>Filters</span>
            <i className="bi bi-filter"></i>
          </div>
          <div className={styles["filter-container"]}>
            <span>Sort By</span>
            <i className="bi bi-arrow-down-short"></i>
          </div>
          <div className={styles["filter-container"]}>
            <span>Fast Delivery</span>
          </div>
          <div className={styles["filter-container"]}>
            <span>New on Swiggy</span>
          </div>
          <div className={styles["filter-container"]}>
            <span>Rattings 4.0+</span>
          </div>
          <div className={styles["filter-container"]}>
            <span>Pure Veg</span>
          </div>
          <div className={styles["filter-container"]}>
            <span>Offers</span>
          </div>
          <div className={styles["filter-container"]}>
            <span>Rs.300-Rs.600</span>
          </div>
          <div className={styles["filter-container"]}>
            <span>Less than Rs.200</span>
          </div>
        </div>
        {isSticky && (
          <div className={styles["restaurants__search"]}>
            <span>Search for restaurant and food</span>
            <i className="bi bi-search"></i>
          </div>
        )}
      </div>
      <div ref={listContainer} className={styles["restaurants__list"]}>
        {
          <>
            {list.map((item, index) => {
              return (
                <div key={index} className={styles["restaurants__list__item"]}>
                  <div className={styles["restaurants__list__item__image"]}>
                    <img src={item.image} alt="" />
                    <div className={styles["overlay"]}>{item.offer}</div>
                  </div>
                  <div className={styles["restaurants__list__item__details"]}>
                    <span className={styles["restaurants__list__item__name"]}>
                      {item.name}
                    </span>
                    <div
                      className={styles["restaurants__list__item__meta-info"]}
                    >
                      <div
                        className={styles["restaurants__list__item__rating"]}
                      >
                        <img src="/icons/green-star.png" alt="" />
                        <span className={styles["ratings"]}>{item.rating}</span>
                      </div>
                      <span className={styles["separator"]}>-</span>
                      <span className={styles["delivery-time"]}>
                        {item.deliveryTime} mins
                      </span>
                    </div>
                    <p className={styles["restaurants__list__item__category"]}>
                      {item.category}
                    </p>
                    <p className={styles["restaurants__list__item__address"]}>
                      {item.address}
                    </p>
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <>
                <div className={styles["restaurants__list__item"]}>
                  <div
                    className={styles["restaurants__list__item__skeleton"]}
                  />
                </div>
                <div className={styles["restaurants__list__item"]}>
                  <div
                    className={styles["restaurants__list__item__skeleton"]}
                  />
                </div>
                <div className={styles["restaurants__list__item"]}>
                  <div
                    className={styles["restaurants__list__item__skeleton"]}
                  />
                </div>
                <div className={styles["restaurants__list__item"]}>
                  <div
                    className={styles["restaurants__list__item__skeleton"]}
                  />
                </div>
              </>
            )}
          </>
        }
      </div>
    </div>
  );
};

export default Lists;
