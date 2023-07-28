import React, { useState } from "react";
import Swal from "sweetalert2";
import styles from "../styles/Form.module.css";

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

  const swalAlert = (icon, name = "") => {
    Swal.fire({
      icon: icon === "error" ? "error" : "success",
      title: icon === "error" ? "Error!" : "¡Gracias por contactarnos!",
      text:
        icon === "error"
          ? "Por favor verifique su información nuevamente"
          : `Gracias ${name}, te contactaremos cuando antes vía mail`,
      timer: 3000,
      showConfirmButton: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim().length < 5 || name.trim() === "") {
      swalAlert("error");
      return;
    }

    if (!emailRegex.test(email) || email.trim() === "") {
      swalAlert("error");
      return;
    } else {
      let data = {
        name,
        email,
      };
      console.log(data);
      swalAlert("success", name);
      setName("");
      setEmail("");
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
          placeholder="Nombre Completo"
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
        <button className={styles.submitButton}>Enviar</button>
      </form>
    </>
  );
};

export default Form;
