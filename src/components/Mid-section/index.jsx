import { Link } from "react-router-dom";
import "./MidSection.css";
function MidSection() {
  return (
    <>
      <div className="midSection-container">
        <div className="para">
          <h2>Find Your Favorite Superheroes with Ease on Our App</h2>
          <p>
            Discover a world of superheroes at your fingertips. Our app makes it
            simple to search and explore a vast collection of characters.
          </p>
          <Link to="/superheros">
            <button>Search</button>
          </Link>
        </div>
        <img className="midSection-img" src="Screenshot_1.png" />
      </div>
    </>
  );
}

export default MidSection;
