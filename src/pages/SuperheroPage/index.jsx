import "./SuperheroPage.css";
import SearchForm from "../../components/SearchForm";
import SuperheroCard from "../../components/SuperheroCard";

const SuperheroPage = () => {
  return (
    <div>
      <h1>Search for your Favorite SuperHero</h1>
      <SearchForm />
      <SuperheroCard />
    </div>
  );
};

export default SuperheroPage;
