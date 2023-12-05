import React from 'react';
import '../App.css';

const CityInput = ({ location, setLocation, onSubmit }) => {
  return (
    <div className='search-container'>
      <input 
        type="text"
        className="input"
        placeholder="Enter city"
        onChange={(e) => setLocation(e.target.value)}
        value={location}
      />
      <button onClick={onSubmit}>Search</button>
    </div>
  );
};

export default CityInput;