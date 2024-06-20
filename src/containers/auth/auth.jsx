import React, { useContext } from "react";
import Drawer from "../../components/custom/drawer/drawer";
import LoginForm from "../login/login-form";
import SignupForm from "../signup/signup-form";
import styles from "./auth.module.scss";
import AuthContext from "../../contexts/auth";

const Auth = () => {
  const { showAuth, setShowAuth } = useContext(AuthContext);
  const { type } = showAuth;

  const closeDrawer = (event) => {
    setShowAuth((state) => {
      return { ...state, visible: false };
    });
  };

  const toggleAuth = () => {
    setShowAuth({
      visible: true,
      type: type === "login" ? "signup" : "login",
    });
  };

  return (
    <Drawer state={showAuth} setState={setShowAuth} direction="right">
      <div className={styles["form-container"]}>
        <i className="fa-solid fa-xmark fa-2xl" onClick={closeDrawer} />
        <div className={styles["form__wrapper"]}>
          <div className={styles["form__main"]}>
            <h2 className={styles["form__header"]}>
              {type === "login" ? "Login" : "Sign up"}
            </h2>
            <button
              className={`btn btn--primary-default ${styles["form__btn"]}`}
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
          <div className={styles["form__icon"]}>
            <img src="/assets/images/frap.png" alt="frap" />
          </div>
        </div>
        {type === "login" ? <LoginForm /> : <SignupForm />}
      </div>
    </Drawer>
  );
};

export default Auth;
