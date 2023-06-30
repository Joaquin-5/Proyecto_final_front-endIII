import React, { useState } from "react";
import styles from "../styles/Form.module.css";
import Swal from "sweetalert2";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/;

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 5 || name.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Por favor verifique su información nuevamente",
        timer: 2500,
        showConfirmButton: false,
      });
      return;
    }

    if (!emailRegex.test(email) || email.trim() === "") {
      Swal.fire({
        icon: "error",
        title: "Error!",
        text: "Por favor verifique su información nuevamente",
        timer: 2500,
        showConfirmButton: false,
      });
      return;
    } else {
      let data = {
        name,
        email,
      };
      console.log(data);
      Swal.fire({
        icon: "success",
        title: "¡Gracias por contactarnos!",
        text: `Gracias ${name}, te contactaremos cuando antes vía mail`,
        timer: 2500,
        showConfirmButton: false,
      });
    }
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor="name" className={styles.label}>
          Nombre Completo
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
      </form>
    </>
  );
};

export default Form;
