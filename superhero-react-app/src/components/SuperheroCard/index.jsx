import { useSuperhero } from "../../contexts";
import "./SuperHeroCard.css";

const SuperheroCard = () => {
  const { superheros, addToFavorites } = useSuperhero();
  const superhero = superheros;

  const handleAddToFavorites = () => {
    if (superhero && superhero.id) {
      addToFavorites(superhero.id);
      // Save superhero id to localStorage or dispatch an action to handle it
    }
  };

  if (!superhero || !superhero.image || !superhero.image.url) {
    return <p>No superhero data available</p>;
  }

  const { name, powerstats, biography, appearance, work, connections, image } =
    superhero;

  return (
    <div className="superhero-card">
      <img className="heroImg" src={image.url} alt={name} />
      <div className="superHero-info">
        <h2>{name}</h2>
        <button onClick={handleAddToFavorites}>Add to Favorites</button>
        <div>
          <h3> Stats:</h3>
          <ul className="stat-list">
            {Object.entries(powerstats).map(([stat, value]) => (
              <li key={stat}>
                {stat}: {value}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3>Biography:</h3>
          <p className="bio">
            <strong>Full Name: </strong> {biography["full-name"]}
          </p>
          <p className="bio">
            <strong>Alter Egos: </strong> {biography["alter-egos"]}
          </p>
          <p className="bio">
            <strong>Aliases: </strong> {biography.aliases.join(", ")}
          </p>
          <p className="bio">
            <strong>Place of Birth: </strong> {biography["place-of-birth"]}
          </p>
          <p className="bio">
            <strong>First Appearance: </strong> {biography["first-appearance"]}
          </p>
          <p>
            <strong>Publisher: </strong> {biography.publisher}
          </p>
          <p className="bio">
            <strong>Alignment: </strong> {biography.alignment}
          </p>
        </div>
        <div>
          <h3>Appearance:</h3>
          <p className="bio">
            <strong>Gender:</strong> {appearance.gender}
          </p>
          <p className="bio">
            <strong>Race:</strong> {appearance.race}
          </p>
          <p className="bio">
            <strong>Height:</strong> {appearance.height.join(", ")}
          </p>
          <p className="bio">
            <strong>Weight:</strong> {appearance.weight.join(", ")}
          </p>
          <p className="bio">
            <strong>Eye Color:</strong> {appearance["eye-color"]}
          </p>
          <p className="bio">
            <strong>Hair Color:</strong> {appearance["hair-color"]}
          </p>
        </div>
        <div>
          <h3>Work:</h3>
          <p className="bio">
            <strong>Occupation:</strong> {work.occupation}
          </p>
          <p className="bio">
            <strong>Base:</strong> {work.base}
          </p>
        </div>
        <div>
          <h3>Connections:</h3>
          <p className="bio">
            <strong>Group Affiliation:</strong>{" "}
            {connections["group-affiliation"]}
          </p>
          <p className="bio">
            <strong>Relatives:</strong> {connections.relatives}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuperheroCard;
