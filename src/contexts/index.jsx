import { useState, useContext, createContext } from "react";

const SuperheroContext = createContext();

// eslint-disable-next-line react/prop-types
export const SuperheroProvider = ({ children }) => {
  const [superheros, setSuperheros] = useState([]);

  const [favoriteSuperheroIds, setFavoriteSuperheroIds] = useState([]);

  const addToFavorites = (superheroId) => {
    setFavoriteSuperheroIds((prevIds) => [...prevIds, superheroId]);
    // You can save favoriteSuperheroIds to localStorage or any other storage mechanism here
    localStorage.setItem(
      "favoriteSuperheroIds",
      JSON.stringify([...favoriteSuperheroIds, superheroId])
    );
  };

  return (
    <SuperheroContext.Provider
      value={{ superheros, setSuperheros, addToFavorites }}
    >
      {children}
    </SuperheroContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useSuperhero = () => useContext(SuperheroContext);
