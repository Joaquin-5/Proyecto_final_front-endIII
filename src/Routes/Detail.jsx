import React, { useEffect, useState } from "react";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";
import { useParams } from "react-router-dom";
import styles from "../styles/Detail.module.css";

const Detail = () => {
  const [data, setData] = useState(null);
  const params = useParams();

  const getData = async (param) => {
    try {
      const data = await fetch(
        `https://jsonplaceholder.typicode.com/users/${param}`
      );

      const convertData = await data.json();
      setData(convertData);
    } catch (error) {
      console.log("Error al obtener la información: ", error);
    }
  };

  useEffect(() => {
    getData(params.id);
  }, []);

  return (
    <Main>
      {data && <MainTitle>Detalle dentista</MainTitle>}
      {data ? (
        <div className={styles.dentistContainer}>
        <h2 className={styles.h2}>Datos Personales</h2>
        <div className={styles.gridContainer}>
          <div className={styles.label}>Id:</div>
          <div className={styles.value}>{data.id}</div>
          <div className={styles.label}>Nombre Completo:</div>
          <div className={styles.value}>{data.name}</div>
          <div className={styles.label}>Nombre de Usuario:</div>
          <div className={styles.value}>{data.username}</div>
          <div className={styles.label}>Email:</div>
          <div className={styles.value}>{data.email}</div>
          <div className={styles.label}>Número de Teléfono:</div>
          <div className={styles.value}>{data.phone}</div>
          <div className={styles.label}>Página Web:</div>
          <div className={styles.value}>{data.website}</div>
        </div>
        <h2 className={styles.h2}>Datos de Dirección</h2>
        <div className={styles.gridContainer}>
          <div className={styles.label}>Calle:</div>
          <div className={styles.value}>{data.address.street}</div>
          <div className={styles.label}>Suite:</div>
          <div className={styles.value}>{data.address.suite}</div>
          <div className={styles.label}>Ciudad:</div>
          <div className={styles.value}>{data.address.city}</div>
          <div className={styles.label}>Código Postal:</div>
          <div className={styles.value}>{data.address.zipcode}</div>
        </div>
        <h2 className={styles.h2}>Datos de la Compañía</h2>
        <div className={styles.gridContainer}>
          <div className={styles.label}>Nombre:</div>
          <div className={styles.value}>{data.company.name}</div>
          <div className={styles.label}>Eslogan:</div>
          <div className={styles.value}>{data.company.catchPhrase}</div>
          <div className={styles.label}>Bs:</div>
          <div className={styles.value}>{data.company.bs}</div>
        </div>
      </div>
      ) : (
        <MainTitle class={styles.loadingMessage}>
          Cargando información...
        </MainTitle>
      )}
    </Main>
  );
};

export default Detail;
