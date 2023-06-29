import React from "react";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
  };

  return (
    <div className={styles.card}>
      {/* En cada card deberan mostrar en name - username y el id */}
      {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}
      {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      <a href="" className="icono"><i></i></a>
      <p className="id"></p>
      <img src="/images/doctor.jpg" alt="image doctor" className={styles.img}/>
      <p className="nombre">Nombre</p>
      <p className="apodo">Apodo</p>
      <button onClick={addFav} className="favButton">
        Marcar como destacado
      </button>
    </div>
  );
};

export default Card;
