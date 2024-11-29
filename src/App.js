import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import './SearchBar.css'; 
import './WeatherCard.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('Toronto'); 
  const [error, setError] = useState('');

  const API_KEY = '2b95c353f49f7aaa074510e20c88e4be';

  const fetchWeather = async (city) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      console.log(response.data); 
      setWeatherData(response.data);
      setError(''); 
    } catch (err) {
      if (err.response?.status === 404) {
        setError('City not found. Please try again.'); 
      } else if (err.response?.status === 401) {
        setError('Invalid API key. Please check your API key.'); 
      } else {
        setError('Something went wrong. Please try again later.'); 
      }
      console.error(err.response || err);
    }
  };

  const handleSearch = (inputCity) => {
    if (!inputCity.trim()) {
      setError('Please enter a valid city name'); 
      return;
    }
    setCity(inputCity); 
    fetchWeather(inputCity); 
  };

 return (
    
    <div 
    className="app" >
      <h1>Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      {error && <p className="error">{error}</p>}
      {weatherData && <WeatherCard weatherData={weatherData} />}
    </div>
  );
};


export default App;
