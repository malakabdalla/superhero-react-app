import React from 'react'

const SuperheroCard = ({superhero}) => {
    const {
        id,
        name,
        powerstats,
        biography,
        appearance,
        work,
        connections,
        image,
      } = superhero;

  return (
    <div className="superhero-card">
    <img src={image.url} alt={name} />
    <h2>{name}</h2>
    <p>ID: {id}</p>
    <div>
      <h3>Powerstats:</h3>
      <ul>
        {Object.entries(powerstats).map(([stat, value]) => (
          <li key={stat}>
            {stat}: {value}
          </li>
        ))}
      </ul>
    </div>
    <div>
      <h3>Biography:</h3>
      <p>
        <strong>Full Name:</strong> {biography['full-name']}
      </p>
      <p>
        <strong>Alter Egos:</strong> {biography['alter-egos']}
      </p>
      <p>
        <strong>Aliases:</strong> {biography.aliases.join(', ')}
      </p>
      <p>
        <strong>Place of Birth:</strong> {biography['place-of-birth']}
      </p>
      <p>
        <strong>First Appearance:</strong> {biography['first-appearance']}
      </p>
      <p>
        <strong>Publisher:</strong> {biography.publisher}
      </p>
      <p>
        <strong>Alignment:</strong> {biography.alignment}
      </p>
    </div>
    <div>
      <h3>Appearance:</h3>
      <p>
        <strong>Gender:</strong> {appearance.gender}
      </p>
      <p>
        <strong>Race:</strong> {appearance.race}
      </p>
      <p>
        <strong>Height:</strong> {appearance.height.join(', ')}
      </p>
      <p>
        <strong>Weight:</strong> {appearance.weight.join(', ')}
      </p>
      <p>
        <strong>Eye Color:</strong> {appearance['eye-color']}
      </p>
      <p>
        <strong>Hair Color:</strong> {appearance['hair-color']}
      </p>
    </div>
    <div>
      <h3>Work:</h3>
      <p>
        <strong>Occupation:</strong> {work.occupation}
      </p>
      <p>
        <strong>Base:</strong> {work.base}
      </p>
    </div>
    <div>
      <h3>Connections:</h3>
      <p>
        <strong>Group Affiliation:</strong> {connections['group-affiliation']}
      </p>
      <p>
        <strong>Relatives:</strong> {connections.relatives}
      </p>
    </div>
  </div>
  )
}

export default SuperheroCard