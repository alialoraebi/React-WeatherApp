import React from 'react';
import '../App.css';

const CityInput = ({ location, setLocation, onSubmit }) => {
  return (
    <div>
      <input 
        type="text"
        className="input"
        placeholder="Enter city"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <button onClick={onSubmit}>Get Weather</button>
    </div>
  );
};

export default CityInput;
