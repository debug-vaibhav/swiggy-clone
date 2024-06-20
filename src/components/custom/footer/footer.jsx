import React from "react";
import styles from "./footer.module.scss";
import data from "./data.json";

const Locations = ({ locations }) => {
  const size = parseInt(locations.length / 4);
  let index = 0;
  return [0, 1, 2, 3].map((i) => {
    const arr = locations.slice(index, index + size);
    index += size;
    return (
      <ul key={i}>
        {arr.map((location, index) => {
          return <li key={index}>{location}</li>;
        })}
      </ul>
    );
  });
};

const Footer = () => {
  return (
    <footer className={styles["footer"]}>
      <div className="container">
        <div className={styles["footer__info-container"]}>
          {data.links.map((link, index) => {
            return (
              <div key={index} className={styles["footer__info"]}>
                <h3>{link.category}</h3>
                <ul>
                  {link.items.map((item, index) => {
                    return <li key={index}>{item}</li>;
                  })}
                </ul>
              </div>
            );
          })}
          <div className={styles["footer__app-links"]}>
            <img src="/assets/images/google-play.png" alt="Google Playstore" />
            <img src="/assets/images/app-store.png" alt="App store" />
          </div>
        </div>
        <hr />
        <div className={styles["footer__locations"]}>
          <h3 className={styles["footer__header"]}>WE DELIVER TO</h3>
          <div className={styles["footer__locations__container"]}>
            <Locations locations={data.locations} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
