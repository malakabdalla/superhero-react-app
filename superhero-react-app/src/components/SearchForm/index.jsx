import React from 'react'
import { useSuperhero } from '../../contexts'
import { useEffect, useState } from 'react'

const SearchForm = () => {
    const [input, setInput] = useState('')
    const [searchString, setSearchString ] = useState('')
    const { setSuperheros } = useSuperhero()

    useEffect(() => {
        const SearchAPI = async () => {
          const response = await fetch(
            `https://superheroapi.com/api/2073755343009452/search/${searchString}`
          );
          const rawData = await response.json();
          const updatedData = rawData.map((s) => s.results[0]);
          setSuperheros(updatedData);
        };
    
        SearchAPI();
      }, [searchString]);

      const handleInput = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSearchString(input);
        setInputValue("");
      };

    
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleInput} required />
        <input type="submit" value="search" />
    </form>
    </>
  )
}

export default SearchForm