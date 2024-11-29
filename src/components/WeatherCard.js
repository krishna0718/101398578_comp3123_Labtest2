import React from 'react';

const WeatherCard = ({ weatherData }) => {
  const { name, main, weather, wind } = weatherData;
  const { temp, feels_like, humidity } = main;
  const { description, icon } = weather[0];

  return (
    <div className="weather-card">
      <h2>{name}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
        alt={description}
      />
      <p>{description}</p>
      <p>Temperature: {temp}°C</p>
      <p>Feels like: {feels_like}°C</p>
      <p>Humidity: {humidity}%</p>
      <p>Wind Speed: {wind.speed} m/s</p>
    </div>
  );
};

export default WeatherCard;