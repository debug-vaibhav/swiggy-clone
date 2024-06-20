import React from "react";
import styles from "./drawer.module.scss";

const Drawer = ({ children, state, setState, direction }) => {
  const closeDrawer = (event) => {
    setState((prevState) => {
      return { ...prevState, visible: false };
    });
  };

  const directionStyle =
    direction === "right" ? styles["right"] : styles["left"];
  const openDirectionStyle =
    state.visible &&
    (direction === "right"
      ? styles["full-width-right"]
      : styles["full-width-left"]);

  return (
    <div className={styles["drawer"]}>
      <div
        className={`${styles["drawer__content"]} ${directionStyle} ${openDirectionStyle}`}
      >
        {children}
      </div>
      <div
        className={`${styles["drawer__overlay"]} ${state.visible && "d-block"}`}
        onClick={closeDrawer}
      ></div>
    </div>
  );
};

export default Drawer;
