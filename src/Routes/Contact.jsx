import React from "react";
import Form from "../Components/Form";
import styles from "../styles/Contact.module.css";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <main className={styles.container}>
      <h1>¡Contáctanos!</h1>
      <Form />
    </main>
  );
};

export default Contact;
