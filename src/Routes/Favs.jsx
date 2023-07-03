import React from "react";
import Card from "../Components/Card";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";

function handleDestacado(usuarioDestacado) {
  if (!favs.some((favorito) => favorito.id === usuarioDestacado.id)) {
    const nuevosFavs = [...favs, usuarioDestacado];
    setFavs(nuevosFavs);
    localStorage.setItem('favs', JSON.stringify(nuevosFavs));
  }
}

function handleRemover(usuarioDestacado) {
  const nuevosFavs = favs.filter((favorito) => favorito.id !== usuarioDestacado.id);
  setFavs(nuevosFavs);
  localStorage.setItem('favs', JSON.stringify(nuevosFavs));
}


const Favs = () => {
  return (
    <Main>
      <MainTitle>Dentistas Favoritos</MainTitle>
      <div className="card-grid">
      
      </div>
    </Main>
  );
};

export default Favs;
