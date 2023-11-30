import React from 'react';
import '../App.css';

const WeatherDisplay = ({ weatherData }) => {
  const { main, weather, wind, name } = weatherData;
  const temperatureCelsius = (main.temp - 273.15).toFixed(2);
  const weatherCondition = weather[0].main;
  const windSpeedKmH = (wind.speed * 3.6).toFixed(2);

  return (
    <div className="container">
      <h2 className="title">Weather in {name}</h2>
      <p className="paragraph">Temperature: {temperatureCelsius}°C</p>
      <p className="paragraph">Condition: {weatherCondition}</p>
      <p className="paragraph">Humidity: {main.humidity}%</p>
      <p className="paragraph">Wind Speed: {windSpeedKmH} km/h</p>
    </div>
  );
};

export default WeatherDisplay;
