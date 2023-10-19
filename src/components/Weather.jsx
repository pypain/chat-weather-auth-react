import React, { useState, useEffect } from 'react';
import styles from '../styles/Weather.module.css';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const apiKey = 'a433a224a4898f35f4b9a3dfaa47c19c';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=moscow&units=metric&appid=' + apiKey;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => setWeatherData(data));
  }, []);

  return (
    <div className={styles.weatherContainer}>
      {weatherData && (
        <div className={styles.weatherInfo}>
          <h2>Погода в Москве</h2>
          <p>Температура: {weatherData.main.temp}°C</p>
          <p>Погода: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
