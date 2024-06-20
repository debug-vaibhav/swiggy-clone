import React, { useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import ToasterContext from "../../../contexts/toaster";

import styles from "./toaster.module.scss";

const Toaster = () => {
  const { toast, setToast } = useContext(ToasterContext);

  const animate = toast.visible && styles["animate"];

  useEffect(() => {
    setTimeout(() => {
      setToast({
        visible: false,
        header: "",
        message: "",
      });
    }, 5000);
  }, [toast.visible]);

  const closeToaster = () => {
    setToast({
      visible: false,
      header: "",
      message: "",
    });
  };

  return ReactDOM.createPortal(
    <div className={`${styles["toaster"]} ${animate}`}>
      <div className={styles["toaster__wrapper"]}>
        <div className={styles["toaster__header"]}>
          <span className={styles["toaster__tagline"]}>{toast.header}</span>
          <span className={styles["toaster__icon"]}>
            <i className="bi bi-x-lg" onClick={closeToaster}></i>
          </span>
        </div>
        <div className={styles["toaster__content"]}>
          <span className={styles["toaster__message"]}>{toast.message}</span>
        </div>
      </div>
      <div className={styles["toaster__border"]} />
    </div>,
    document.body
  );
};

export default Toaster;
