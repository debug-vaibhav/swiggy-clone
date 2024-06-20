import styles from "./signup-form.module.scss";
import data from "./data.json";

const SignupForm = () => {
  return (
    <div className={styles["form-container"]}>
      <form>
        <div className={styles["form__wrapper"]}>
          {data.signup.formElements.map((element, index) => {
            return (
              <div key={index} className={styles["form__element-container"]}>
                <input
                  type={element.type}
                  name={element.name}
                  id={element.id}
                  autoComplete="off"
                  maxLength={element.maxLength}
                  required
                />
                <label htmlFor="phone">{element.label}</label>
              </div>
            );
          })}
        </div>
        <h3 className={styles["form__referral"]}>Have a referral code ?</h3>
        <button className={`btn btn--primary-inverse ${styles["form__btn"]}`}>
          <span>CONTINUE</span>
        </button>
        <p>
          By clicking on Login, I accept the Terms & Conditions and Privacy
          Policy
        </p>
      </form>
    </div>
  );
};

export default SignupForm;
