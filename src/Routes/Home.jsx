import React, { useState, useEffect } from "react";
import Card from "../Components/Card";
import styles from "../styles/Home.module.css";

const Home = () => {
  const [dentists, setDentists] = useState([]);

  const getData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");

    const convert = await data.json();
    setDentists(convert);
  };

  useEffect(() => {
    getData();
  });

  return (
    <main>
      <h1 className={styles.mainTitle}>Menú Principal</h1>
      <div className={styles.cardGrid}>
        {dentists.map((dentist) => (
          <Card
            name={dentist.name}
            username={dentist.username}
            key={dentist.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Home;
