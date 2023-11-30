import React from 'react';
import './App.css';

const WeatherDisplay = ({ weatherData }) => {
  const { main, weather, wind, name, dt } = weatherData;

  const temperatureCelsius = (main.temp - 273.15).toFixed(2);

  const weatherCondition = weather[0].main;
  const weatherIcon = weather[0].icon;

  const windSpeedKmH = (wind.speed * 3.6).toFixed(2);

  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  return (
    <div className="weather-display-container">
      <div className="current-weather">
        <div className="date-location">
          <p>{`${dayOfWeek}, ${month} ${day}`}</p>
          <h2>{name}</h2>
        </div>
        <div className="temperature">
          <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon" />
          <h1>{`${temperatureCelsius}°C`}</h1>
          <p>{weatherCondition}</p>
        </div>
      </div>
      <div className="weather-details">
        <p className="paragraph">Humidity: {main.humidity}%</p>
        <p className="paragraph">Wind Speed: {windSpeedKmH} km/h</p>
        <p className="paragraph">Pressure: {main.pressure} mb</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;