import React from 'react';
import './styles/App.css';

export default function App() {
  const [number, setNumber] = React.useState(0);
  const [cannabises, setCannabises] = React.useState(null);

  const fetchCannabises = async () => {
    const response = await fetch(
      `https://random-data-api.com/api/cannabis/random_cannabis?size=${number}`
    );
    const loadedCannabises = await response.json();
    setCannabises(loadedCannabises);
  };

  const addOne = () => {
    setNumber(number + 1);
  };

  const subtractOne = () => {
    if (number !== 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div>
      <button onClick={addOne}>Add one</button>
      <button onClick={subtractOne}>Subtract one</button>
      <button className="fetch" onClick={fetchCannabises}>
        Fetch
      </button>
      <h1>{number}</h1>
      {cannabises &&
        cannabises.map((cannabis, i) => (
          <p key={i}>
            {i + 1}. {cannabis.strain}
          </p>
        ))}
    </div>
  );
}