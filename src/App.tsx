import React, { useState } from 'react';
import './App.css';
import Result from './components/Result';
import SearchForm from './components/SearchForm';
import { ResultStateType } from './types/ResultStateType';

function App() {
  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<ResultStateType>({
    country: '',
    name: '',
    temp_c: '',
    condition_icon: '',
    condition_text: '',
    message_text: '',
  });

  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!keyword) {
      return;
    }
    console.log('call getWeather');
    const weatherApiEndpoint = process.env.REACT_APP_WEATHER_API_ENDPOINT;
    const apiKey = process.env.REACT_APP_WEATHER_API_KEY;
    console.log(weatherApiEndpoint, apiKey);
    const requestUrl = `${weatherApiEndpoint}?key=${apiKey}&q=${keyword}`;
    fetch(requestUrl)
      .then((res) => res.json())
      .then((data) => {
        setResult({
          country: data.location.country,
          name: data.location.name,
          temp_c: data.current.temp_c,
          condition_icon: data.current.condition.icon,
          condition_text: data.current.condition.text,
          message_text: '取得成功',
        });
        console.log(data);
      })
      .catch((err) => {
        console.error('入力された都市のデータが存在しません');
        setResult({
          country: '',
          name: '',
          temp_c: '',
          condition_icon: '',
          condition_text: '',
          message_text: '入力された都市のデータが存在しません',
        });
      });
  };
  return (
    <div className="App">
      <h1>都市を入力</h1>
      <SearchForm setKeyword={setKeyword} getWeather={getWeather} />
      <Result result={result} />
    </div>
  );
}

export default App;
