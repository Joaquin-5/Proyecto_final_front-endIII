import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";
import { faBookmark as fasBookmark } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "@mui/material";
import { FavoritesContext } from "./utils/favoriteContext";
import styles from "../styles/Card.module.css";

const Card = (props) => {
  const [isSolid, setIsSolid] = useState(props.isFavorite);
  const [dataDentist] = useState({
    id: props.onClick,
    name: props.name,
    username: props.username,
  });
  const { addFavorite, removeFavorite } = useContext(FavoritesContext);
  const navigate = useNavigate();

  const handleAddFav = (e) => {
    e.stopPropagation();
    setIsSolid(!isSolid);
    addFavorite(dataDentist);
    console.log(dataDentist);
    console.log("Se ejecutó la función addFav");
  };

  const handleRemoveFav = (e) => {
    e.stopPropagation();
    setIsSolid(!isSolid);
    removeFavorite(dataDentist);
    console.log("Se ejecutó la función removeFav");
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
          onClick={isSolid ? handleRemoveFav : handleAddFav}
        />
      </Tooltip>
    </div>
  );
};

export default Card;
