import React from "react";
import Drawer from "../../components/drawer/drawer";
import LoginForm from "../login/login-form";
import SignupForm from "../signup/signup-form";
import styles from "./auth.module.scss";

const Auth = ({ showAuth, setShowAuth }) => {
  const { type } = showAuth;

  const closeDrawer = (event) => {
    event.stopPropagation();
    setShowAuth((state) => {
      return { ...state, visible: false };
    });
    document.body.classList.remove("overlay-enabled");
    document.body.classList.remove("overlay-no-margin");
  };

  const toggleAuth = () => {
    setShowAuth({
      visible: true,
      type: type === "login" ? "signup" : "login",
    });
  };

  return (
    <Drawer state={showAuth} setState={setShowAuth}>
      <div className={styles["form-container"]}>
        <i className="fa-solid fa-xmark fa-2xl" onClick={closeDrawer} />
        <div className={styles["form-wrapper"]}>
          <div className={styles["form-header-container"]}>
            <h2>{type === "login" ? "Login" : "Sign up"}</h2>
            <button
              className={`btn btn-primary-default ${styles["auth-btn"]}`}
              onClick={toggleAuth}
            >
              or
              <span>
                {type === "login"
                  ? "create an account"
                  : "login to your account"}
              </span>
            </button>
            <hr />
          </div>
          <div className={styles["form-icon"]}>
            <img src="/assets/images/frap.png" alt="frap" />
          </div>
        </div>
        {type === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </Drawer>
  );
};

export default Auth;
