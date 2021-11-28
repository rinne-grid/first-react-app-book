import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  const [keyword, setKeyword] = useState('');
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('call getWeather');
    const weatherApiEndpoint = process.env.REACT_APP_WEATHER_API_ENDPOINT;
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(weatherApiEndpoint, apiKey);
    const requestUrl = `${weatherApiEndpoint}?key=${apiKey}&q=Tokyo`;
    fetch(requestUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="App">
      <SearchForm setKeyword={setKeyword} getWeather={getWeather} />
    </div>
  );
}

export default App;
