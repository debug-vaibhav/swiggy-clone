import ReactDOM from "react-dom";
import Login from "./login";
import Signup from "./signup";
import styles from "./auth.module.scss";

const Auth = ({ showAuth, setShowAuth }) => {
  const { visible, type } = showAuth;

  const closeAuthModal = (event) => {
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

  return ReactDOM.createPortal(
    <div className={`wrapper ${styles["auth-section"]}`}>
      <div
        className={`${styles["auth-container"]} ${
          visible && `${styles["width-40vw"]}`
        }`}
      >
        <div className={styles["auth-header-form-container"]}>
          <i className="fa-solid fa-xmark fa-2xl" onClick={closeAuthModal} />
          <div className={styles["auth-header-wrapper"]}>
            <div className={styles["auth-header-container"]}>
              <h2>{type === "login" ? "Login" : "Sign up"}</h2>
              <button
                className={`btn btn-primary-default ${styles["login-btn"]}`}
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
            <div className={styles["auth-img"]}>
              <img src="/assets/images/frap.png" alt="frap" />
            </div>
          </div>
          {type === "login" ? <Login /> : <Signup />}
        </div>
      </div>
      <div
        className={`${styles["overlay"]}  ${visible && "d-block"}`}
        onClick={closeAuthModal}
      ></div>
    </div>,
    document.getElementById("portal")
  );
};

export default Auth;
