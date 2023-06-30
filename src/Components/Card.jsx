import React from "react";
import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = (props) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    console.log(props.id);
  };

  return (
    <Link to="/detail" className={styles.card} key={props.id} onClick={addFav}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <img src="/images/doctor.jpg" alt="image doctor" className={styles.img} />
      <h3 className="nombre">{props.name}</h3>
      <h4 className="apodo">{props.username}</h4>
      <button onClick={addFav} className={styles.favButton}>
        Marcar como destacado
      </button>
    </Link>
  );
};

export default Card;
