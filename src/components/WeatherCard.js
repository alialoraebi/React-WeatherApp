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
    <div id="weather-display-container">
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
        <p className="detail-item">
          <span className="detail-name">Humidity</span>
          <span className="detail-value">{main.humidity}%</span>
        </p>
        <p className="detail-item">
          <span className="detail-name">Wind Speed</span>
          <span className="detail-value">{windSpeedKmH} km/h</span>
        </p>
        <p className="detail-item">
          <span className="detail-name">Pressure</span>
          <span className="detail-value">{main.pressure} mb</span>
        </p>
        <p className="detail-item">
          <span className="detail-name">Max Temp</span>
          <span className="detail-value">{(main.temp_max - 273.15).toFixed(2)}°C</span>
        </p>
        <p className="detail-item">
          <span className="detail-name">Min Temp</span>
          <span className="detail-value">{(main.temp_min - 273.15).toFixed(2)}°C</span>
        </p>
      </div>
    </div>
  );
};

export default WeatherDisplay;
