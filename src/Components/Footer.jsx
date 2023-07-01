import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <p className={styles.text}>Powered by</p>
        <img src="/images/DH.png" alt="DH-logo" className={styles.imgLogo} />
      </div>
      <div className={styles.socialMediaContainer}>
        <a href="https://es-la.facebook.com/" target="_BLANK">
          <img
            src="/images/ico-facebook.png"
            alt="facebook icon"
            className={styles.imgMedia}
          />
        </a>
        <a href="https://www.instagram.com/" target="_BLANK">
          <img
            src="/images/ico-instagram.png"
            alt="instagram icon"
            className={styles.imgMedia}
          />
        </a>
        <a href="https://www.tiktok.com/explore?" target="_BLANK">
          <img
            src="/images/ico-tiktok.png"
            alt="tiktok icon"
            className={styles.imgMedia}
          />
        </a>
        <a href="https://www.whatsapp.com/?lang=es" target="_BLANK">
          <img
            src="/images/ico-whatsapp.png"
            alt="whatsapp icon"
            className={styles.imgMedia}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
