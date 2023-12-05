import React, { useState } from 'react';
import CityInput from './components/CityInput';
import useWeatherData from './components/useWeatherData';
import WeatherDisplay from './components/WeatherCard';
import './App.css';

export default function App() {
  const [location, setLocation] = useState('');
  const { weatherData, loading, error, fetchWeatherData } = useWeatherData('a45a331110e05d374968f6b3270212e7');

  return (
    <div className="container">
      <h1 className="title">Weather Forecast</h1>
      <CityInput 
        location={location} 
        setLocation={setLocation} 
        onSubmit={() => fetchWeatherData(location)} 
      />
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}
