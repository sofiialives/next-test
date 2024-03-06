import React from "react";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.logo}>SofiiaLives</h2>
      <p className={styles.text}>
        SofiiaLives && TeamForce developers collaboration © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
