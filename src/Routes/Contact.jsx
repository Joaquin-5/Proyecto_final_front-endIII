import React from "react";
import Form from "../Components/Form";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";
import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <Main className={styles.container}>
      <MainTitle>¡Contáctanos!</MainTitle>
      <div className={styles.formContainer}>
        <Form />
      </div>
    </Main>
  );
};

export default Contact;
