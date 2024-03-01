import React, { useState, useContext, createContext } from "react";

const SuperheroContext = createContext();

export const SuperheroProvider = ({ children }) => {
    const [ superheros, setSuperheros] = useState([]);

    return (
        <SuperheroContext.Provider value={{ superheros, setSuperheros }}>
            {children}
        </SuperheroContext.Provider>
    );
};

export const useSuperhero = () => useContext(SuperheroContext);