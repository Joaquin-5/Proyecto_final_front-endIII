import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <header>
      <nav className={styles.nav}>
        <div className="logo">
          <Link to="/">
            <img src="/DH.ico" alt="logo app" className={styles.logo} />
          </Link>
        </div>
        <div className={styles.links}>
          <Link to="/" className={styles.link}>
            Menú principal
          </Link>
          <Link to="/favs" className={styles.link}>
            Favoritos
          </Link>
          <Link to="/contacto" className={styles.link}>
            Contacto
          </Link>
          {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
          <button>Change theme</button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
