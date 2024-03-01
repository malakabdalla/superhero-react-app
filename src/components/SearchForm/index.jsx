import axios from "axios";
import "./Form.css";
import { useSuperhero } from "../../contexts";
import { useEffect, useState } from "react";

const SearchForm = () => {
  const [input, setInput] = useState("");
  const [searchString, setSearchString] = useState("");
  const { setSuperheros } = useSuperhero();

  const searchAPI = async () => {
    try {
      const response = await axios.get(
        `https://superheroapi.com/api.php/2073755343009452/search/${searchString}`
      );
      console.log(response);
      if (response.status === 200) {
        const updatedData = response.data.results.map((result) => result);
        setSuperheros(updatedData[0]);
      } else {
        console.error(
          "Response not okay:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Axios error:", error);
    }
  };

  useEffect(() => {
    searchAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="inputField"
          type="text"
          placeholder="Super Hero Name"
          onChange={handleInput}
          required
        />
        <input className="searchBtn" type="submit" value="search" />
      </form>
    </>
  );
};

export default SearchForm;
