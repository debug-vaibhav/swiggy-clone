import React from "react";
import styles from "./mobile.module.scss";

const MobileLayout = () => {
  return (
    <div className={styles["mobile-only-section"]}>
      <div className={styles["img-container"]}>
        <img src="/assets/images/rotate.png" alt="desktop-only" />
      </div>
      <div className={styles["info-container"]}>
        <h2>NOT AVAILABLE ON MOBILE YET</h2>
        <p>
          We are not yet available mobile devices, Please use tablet or desktop
          device to view the website
        </p>
      </div>
    </div>
  );
};

export default MobileLayout;
