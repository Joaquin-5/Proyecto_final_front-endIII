import React, { useState } from "react";
import styles from "../styles/Form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 5 || name.trim() === "") {
      setMessage("Por favor verifique su información nuevamente");
      setError(true);
      return;
    }

    if (!emailRegex.test(email) || email.trim() === "") {
      setMessage("Por favor verifique su información nuevamente");
      setError(true);
      return;
    } else {
      let data = {
        name,
        email,
      };
      console.log(data);
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
    }
  };

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  const clases = `${styles.message} ${styles.error}`;

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Nombre
        </label>
        <input
          type="text"
          id="name"
          placeholder="Nombre"
          className={styles.input}
          value={name}
          onChange={onChangeName}
        />
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          type="text"
          id="email"
          placeholder="Email"
          className={styles.input}
          value={email}
          onChange={onChangeEmail}
        />
        <button className={styles.button}>Enviar</button>
        {error ? (
          <p className={clases}>{message}</p>
        ) : (
          <p className={styles.message}>{message}</p>
        )}
      </form>
    </>
  );
};

export default Form;
