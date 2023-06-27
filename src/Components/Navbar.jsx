import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="logo">
        <Link to="/home">
          <img src="/logo.webp" alt="logo app" className={styles.logo}/>
        </Link>
      </div>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      <div className="links">
        <Link to="/home" className={styles.link}>Menú principal</Link>
        <Link to="/favs" className={styles.link}>Favoritos</Link>
        <Link to="/contacto" className={styles.link}>Contacto</Link>
        {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
        <button>Change theme</button>
      </div>
    </nav>
  );
};

export default Navbar;
