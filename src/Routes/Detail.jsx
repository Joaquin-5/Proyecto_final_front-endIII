import React, { useEffect, useState } from "react";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";

const Detail = (props) => {
  const [data, setData] = useState({});

  const getData = async () => {
    const data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${props.id}`
    );

    const convertData = await data.json();
    setData(convertData);
  };

  console.log(data);

  /* useEffect(() => {
    getData();
  }); */

  return (
    <Main>
      <MainTitle>Detalle dentista</MainTitle>
      <div className="dentistContainer">
        {/* {data.map((dentist) => (
          <h2>{dentist.name}</h2>
        ))} */}
      </div>
    </Main>
  );
};

export default Detail;
