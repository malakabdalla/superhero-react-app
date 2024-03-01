import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="header">SuperHero Hunter</div>
      <div className="massage">
        <p className="statementPara">Find Your Superhero Match Today</p>

        <p className="messagePara">
          Welcome to the Super Hero Hunter App, where you can discover and
          connect with superheroes from all over the world. Whether you are in
          need of a crime-fighting partner or simply want to learn more about
          your favorite heroes, we have got you covered.
        </p>
      </div>
      <div>
        <img
          className="frontPageImg"
          src="/public/7ece2a36566101.573086c407031.jpg"
        />
      </div>
    </>
  );
};
export default Header;
