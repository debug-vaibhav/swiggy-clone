import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../contexts/auth";
import ToasterContext from "../../contexts/toaster";
import UserContext from "../../contexts/user";

import styles from "./login-form.module.scss";

const LoginForm = () => {
  const { setShowAuth } = useContext(AuthContext);
  const { setToast } = useContext(ToasterContext);
  const { user, setUser } = useContext(UserContext);
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [isPhoneValid, setPhoneValidity] = useState(true);
  const [isOtpValid, setOtpValidity] = useState(true);
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();

  const getOtp = (event) => {
    event.preventDefault();
    if (phone.length < 10) {
      setPhoneValidity(false);
    } else {
      let otp = Math.floor(Math.random() * 1000000);
      setUser((previousState) => {
        return {
          ...previousState,
          otp: otp,
        };
      });
      setToast({
        visible: true,
        header: "OTP Received",
        message: `Use OTP ${otp} to log into your Swiggy account. Do not share the OTP or your number with anyone including Swiggy personnel!`,
      });
      setTimeout(() => {
        setShowOtp(true);
      }, 1000);
    }
  };

  const verifyOtp = (event) => {
    event.preventDefault();
    if (user.otp === otp) {
      setTimeout(() => {
        setShowAuth(false);
        navigate("/restaurants");
      }, 2000);
    } else {
      setOtpValidity(false);
    }
  };

  const validatePhone = (value) => {
    const regExp = /[a-zA-Z]/g;
    if (!regExp.test(value)) {
      setPhone(value);
      setPhoneValidity(true);
    }
    if (phone.length < 10) {
      setShowOtp(false);
    }
  };

  const validateOtp = (value) => {
    const regExp = /[a-zA-Z]/g;
    if (!regExp.test(value)) {
      setOtp(parseInt(value));
    }
  };

  return (
    <div className={styles["form-container"]}>
      <form onSubmit={showOtp ? verifyOtp : getOtp}>
        <div className={styles["form"]}>
          <div className={styles["form__element"]}>
            <input
              type="tel"
              name="phone"
              id="phone"
              autoComplete="off"
              maxLength={10}
              value={phone}
              onChange={(event) => validatePhone(event.target.value)}
            />
            {isPhoneValid ? (
              <label className={styles["form__element__label"]} htmlFor="phone">
                Phone number
              </label>
            ) : (
              <label
                htmlFor="phone"
                className={`${styles["form__element__label"]} ${styles["form__element__label--highlight"]}`}
              >
                Enter your phone number
              </label>
            )}
          </div>
          {showOtp && (
            <div className={styles["form__element"]}>
              <input
                type="tel"
                name="otp"
                id="otp"
                autoComplete="off"
                value={otp}
                onChange={(event) => validateOtp(event.target.value)}
                maxLength={6}
              />
              {isOtpValid ? (
                <label className={styles["form__element__label"]} htmlFor="otp">
                  One time password
                </label>
              ) : (
                <label
                  htmlFor="otp"
                  className={`${styles["form__element__label"]} ${styles["form__element__label--highlight"]}`}
                >
                  Invalid OTP - Please try again
                </label>
              )}
            </div>
          )}
        </div>
        {!showOtp && (
          <button className={`btn btn--primary-inverse ${styles["form__btn"]}`}>
            <span>LOGIN</span>
          </button>
        )}
        {showOtp && (
          <button className={`btn btn--primary-inverse ${styles["form__btn"]}`}>
            <span>VERIFY OTP</span>
          </button>
        )}
        <p>
          By clicking on Login, I accept the Terms & Conditions and Privacy
          Policy
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
