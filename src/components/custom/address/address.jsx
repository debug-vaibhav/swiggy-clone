// eslint-disable-next-line array-callback-return
import React from "react";
import styles from "./address.module.scss";

const Icon = ({ type }) => {
  let icon;

  switch (type) {
    case "home":
      icon = <i className="bi bi-house-door"></i>;
      break;
    case "work":
      icon = <i className="bi bi-briefcase"></i>;
      break;
    case "gps":
      icon = <i className="bi bi-crosshair"></i>;
      break;
    default:
      icon = <i className="bi bi-geo-alt"></i>;
  }
  return icon;
};

const Address = ({ header, locations }) => {
  return (
    <div className={styles["address"]}>
      {header && <h3 className={styles["address__header"]}>{header}</h3>}
      {locations.map((location, index) => {
        return (
          <div key={index} className={styles["address__content"]}>
            <Icon type={location.type} />
            <div className={styles["address__details"]}>
              <span className={styles["address__details__main"]}>
                {location.name}
              </span>
              <span className={styles["address__details__sub"]}>
                {location.address}
              </span>
            </div>
          </div>
        );
      })}
      {locations.length > 1 && (
        <span className={styles["address__extra"]}>VIEW MORE</span>
      )}
    </div>
  );
};

export default Address;
