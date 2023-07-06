import React, { useContext } from "react";
import Card from "../Components/Card";
import { Main } from "../Components/Main";
import { MainTitle } from "../Components/MainTitle";
import { FavoritesContext } from "../Components/utils/favoriteContext";

const Favs = () => {
  const { favorites, cantFavorites } = useContext(FavoritesContext);

  console.log(favorites);

  const handleId = (id) => {
    return id;
  };

  return (
    <Main>
      <MainTitle>Dentistas Favoritos</MainTitle>
      <div className="card-grid">
        {cantFavorites > 0 ? (
          favorites.map((favDentist) => (
            <Card
              name={favDentist.name}
              username={favDentist.username}
              key={favDentist.id}
              onClick={handleId(favDentist.id)}
              isFavorite={true}
            />
          ))
        ) : (
          <h2>No tienes Dentistas favoritos</h2>
        )}
      </div>
    </Main>
  );
};

export default Favs;
