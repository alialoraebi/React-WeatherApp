import { useState } from 'react';
import '../App.css';


const useWeatherData = (API_KEY) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchWeatherData = (location) => {  
    if (!location) {
      window.alert('Invalid Input', 'Please enter a city name.');
      return;
    }

    setLoading(true);
    setError(null);

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

    fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw new Error(`${response.status}: ${response.statusText}`);
        }
        return response.json();
      })
      .then(data => {
        setWeatherData(data);
        setLoading(false);
      })
      .catch(error => {
        window.alert('Error', error.message);
        setError(error.message);
        setLoading(false);
      });
  };

  return { weatherData, loading, error, fetchWeatherData };
};

export default useWeatherData;
