import { useEffect, useState } from "react";
import axios from "axios"; // Make sure to install axios if not already done
import { useSuperhero } from "../../contexts";

const FavPage = () => {
  // eslint-disable-next-line no-unused-vars
  const { addToFavorites } = useSuperhero();
  const [favoriteSuperheroes, setFavoriteSuperheroes] = useState([]);

  useEffect(() => {
    const savedSuperheroIds =
      JSON.parse(localStorage.getItem("favoriteSuperheroIds")) || [];

    const fetchFavoriteSuperheroes = async () => {
      const promises = savedSuperheroIds.map(async (id) => {
        try {
          const response = await axios.get(
            `https://superheroapi.com/api/2073755343009452/${id}`
          );
          return response.data;
        } catch (error) {
          console.error(`Error fetching superhero with ID ${id}`, error);
          return null;
        }
      });

      const favoriteSuperheroesData = await Promise.all(promises);
      setFavoriteSuperheroes(
        favoriteSuperheroesData.filter((hero) => hero !== null)
      );
    };

    fetchFavoriteSuperheroes();
  }, []);

  return (
    <div>
      <h2>Favorite Superheroes</h2>
      {favoriteSuperheroes.map((hero) => (
        <div key={hero.id}>
          <h3>{hero.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default FavPage;
