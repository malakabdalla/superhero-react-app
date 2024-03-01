import axios from 'axios'
import React from 'react'
import { useSuperhero } from '../../contexts'
import { useEffect, useState } from 'react'


const SearchForm = () => {
    const [input, setInput] = useState('')
    const [searchString, setSearchString ] = useState('')
    const { setSuperheros } = useSuperhero()

    const searchAPI = async () => {
        try {
          const response = await axios.get(`https://superheroapi.com/api/2073755343009452/search/${searchString}`);
          console.log(response)
          if (response.status === 200) {
            const updatedData = response.data.results.map((result) => result); 
            setSuperheros(updatedData[0]);
          } else {
            console.error('Response not okay:', response.status, response.statusText);
          }
        } catch (error) {
          console.error('Axios error:', error);
        }
      };
    
    useEffect(() => {
        
    
        searchAPI();
      }, [searchString]);

      const handleInput = (e) => {
        const newInput = e.target.value;
        setInput(newInput);
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        setSearchString(input);
        setInput("");
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