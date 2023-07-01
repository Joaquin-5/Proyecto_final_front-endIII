import React from "react";
import styles from "../styles/Card.module.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const navigate = useNavigate();

  const addFav = (e) => {
    e.stopPropagation();
    console.log("Marcando como favorito...");
  };

  const handleNavigation = () => {
    navigate("/detail");
  };

  return (
    <div className={styles.card} onClick={handleNavigation}>
      <img src="/images/doctor.jpg" alt="image doctor" className={styles.img} />
      <h3 className="nombre">{props.name}</h3>
      <h4 className="apodo">{props.username}</h4>
      <button onClick={addFav} className={styles.favButton}>
        Marcar como favorito
      </button>
      
    </div>
  );
};

export default Card;
