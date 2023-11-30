import React from 'react';
import '../App.css';

const WeatherDisplay = ({ weatherData }) => {
  const { main, weather, wind, name, dt } = weatherData;

  const temperatureCelsius = Math.round(main.temp - 273.15);
  const weatherIcon = weather[0].icon;
  const weatherDescription = weather[0].description;
  const windSpeedKmH = (wind.speed * 3.6).toFixed(2);

  const date = new Date(dt * 1000);
  const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const day = date.getDate();

  return (
    <div className="weather-display-container">
      <div className="current-weather">
        <div className="date-location">
          <p className="date">{`${dayOfWeek}, ${month} ${day}`}</p>
          <h2 className="location">{name}</h2>
        </div>
        <div className="temperature-section">
          <img src={`http://openweathermap.org/img/wn/${weatherIcon}@2x.png`} alt="weather icon" />
          <p className="temperature">{`${temperatureCelsius}°C`}</p>
          <p className="weather-condition">{weatherDescription}</p>
        </div>
      </div>
      <div className="weather-details">
        <p className="detail-item">Humidity: {main.humidity}%</p>
        <p className="detail-item">Wind Speed: {windSpeedKmH} km/h</p>
        <p className="detail-item">Pressure: {main.pressure} mb</p>
        <p className="detail-item">Max Temp: {(main.temp_max - 273.15).toFixed(2)}°C</p>
        <p className="detail-item">Min Temp: {(main.temp_min - 273.15).toFixed(2)}°C</p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
