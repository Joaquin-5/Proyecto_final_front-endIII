import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  const [isSolid, setIsSolid] = useState(false);
  const navigate = useNavigate();

  const addFav = (e) => {
    e.stopPropagation();
    setIsSolid(!isSolid);
    console.log(props.key);
    console.log("Marcando como favorito...");
  };

  const handleNavigation = () => {
    navigate(`/detail/${props.onClick}`);
  };

  return (
    <div className={styles.card} onClick={handleNavigation}>
      <img src="/images/doctor.jpg" alt="image doctor" className={styles.img} />
      <h3 className="nombre">{props.name}</h3>
      <h4 className="apodo">{props.username}</h4>
      <Tooltip title={isSolid ? "Eliminar de favoritos" : "Añadir a favoritos"}>
        <FontAwesomeIcon
          icon={isSolid ? fasBookmark : farBookmark}
          className={styles.bootMarkIcon}
          onClick={addFav}
        />
      </Tooltip>
    </div>
  );
};

export default Card;
