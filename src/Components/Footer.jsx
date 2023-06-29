import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.text}>Powered by</p>
      <img src="/images/DH.png" alt="DH-logo" className={styles.img} />
    </footer>
  );
};

export default Footer;
