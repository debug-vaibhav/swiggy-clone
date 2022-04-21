import styles from "./login.module.scss";

const Login = () => {
  return (
    <div className={styles["form-section"]}>
      <form>
        <div className={styles["form-wrapper"]}>
          <div className={styles["form-element-container"]}>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="off"
              maxLength={10}
              required
            />
            <label htmlFor="phone">Phone number</label>
          </div>
        </div>
        <button className={`btn btn-primary-inverse ${styles["btn-login"]}`}>
          <span>LOGIN</span>
        </button>
        <p>
          By clicking on Login, I accept the Terms & Conditions and Privacy
          Policy
        </p>
      </form>
    </div>
  );
};

export default Login;
