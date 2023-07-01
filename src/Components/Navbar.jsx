import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";
import { ContextGlobal } from "./utils/ThemeContext";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const theme = useContext(ContextGlobal);

  const changeTheme = () => {
    theme.changeTheme();
  };

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
          <button className={styles.changeThemeButton} onClick={changeTheme}>
            Cambiar Tema
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
