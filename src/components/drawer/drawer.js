import ReactDOM from "react-dom";
import styles from "./drawer.module.scss";

const Drawer = ({ children, state, setState }) => {
  const closeDrawer = (event) => {
    event.stopPropagation();
    setState((prevState) => {
      return { ...prevState, visible: false };
    });
    document.body.classList.remove("overlay-enabled");
    document.body.classList.remove("overlay-no-margin");
  };

  return ReactDOM.createPortal(
    <div className="wrapper">
      <div
        className={`${styles["content-container"]} ${
          state.visible && `${styles["full-width"]}`
        }`}
      >
        {children}
      </div>
      <div
        className={`${styles["overlay"]} ${state.visible && "d-block"}`}
        onClick={closeDrawer}
      ></div>
    </div>,
    document.getElementById("portal")
  );
};

export default Drawer;
