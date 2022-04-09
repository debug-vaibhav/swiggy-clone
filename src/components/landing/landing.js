/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from "./landing.module.scss";

const Landing = () => {
  return (
    <div className="wrapper">
      <div className={styles["location-background-section"]}>
        <div className={`container ${styles["location-section"]}`}>
          <div className={styles["header-container"]}>
            <div className={styles["logo-container"]}>
              <img src="/assets/logo.png" alt="Swiggy" />
            </div>
            <div className={styles["auth-action-container"]}>
              <button className="btn btn-default">
                <span>Login</span>
              </button>
              <button className="btn btn-dark">
                <span>Sign up</span>
              </button>
            </div>
          </div>
          <div className={styles["search-location-section"]}>
            <h2>Unexpected guests ?</h2>
            <p>Order food from favourite restaurants near you.</p>
            <div className={styles["search-location-input-container"]}>
              <div className={styles["input-wrapper"]}>
                <input
                  className="form-input"
                  type="text"
                  placeholder="Enter your delivery location"
                />
              </div>
              <button className="btn btn-primary">
                <span>FIND&nbsp;FOOD</span>
              </button>
            </div>
            <p className={styles["popular-city-header"]}>
              POPULAR CITIES IN INDIA
            </p>
            <ul>
              <li>
                <a href="#">Ahmedabad</a>
              </li>
              <li>
                <a href="#">Bangalore</a>
              </li>
              <li>
                <a href="#">Chennai</a>
              </li>
              <li>
                <a href="#">Delhi</a>
              </li>
              <li>
                <a href="#">Gurgaon</a>
              </li>
              <li>
                <a href="#">Hyderabad</a>
              </li>
              <li>
                <a href="#">Kolkata</a>
              </li>
              <li>
                <a href="#">Mumbai</a>
              </li>
              <li>
                <a href="#">Pune</a>
              </li>
              <li>
                <a href="#">& more.</a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles["backgroud-section"]}></div>
      </div>
      <div className={styles["feayures-section"]}></div>
    </div>
  );
};

export default Landing;
