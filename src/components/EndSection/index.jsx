import "./EndSection.css";
import { Link } from "react-router-dom";
function EndSection() {
  return (
    <>
      <div className="EndSection-container">
        <div className="Para">
          <h2>Discover the Power and Origins of Your Favorite Superheroes</h2>
          <p>
            Our superhero search app provides a comprehensive database of
            superhero information, including their powers and origin stories.
            Find out everything you need to know about your favorite superheroes
            with just a few clicks.
          </p>
          <Link to="/favorites">
            <button>Favorite</button>
          </Link>
        </div>
        <img className="endSectionImg" src="superHero3.png" />
      </div>
    </>
  );
}

export default EndSection;
