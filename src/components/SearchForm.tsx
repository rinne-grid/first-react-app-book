import React from 'react';
import { useState } from 'react';

type SearchFormPropsType = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  keyword: string;
};

const SearchForm = (props: SearchFormPropsType) => {
  const getWeather = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('call getWeather');
  };
  return (
    <>
      <form onSubmit={getWeather}>
        <input type="text" onChange={(e) => props.setKeyword(e.target.value)} />
        <button type="submit">検索</button>
      </form>
    </>
  );
};

export default SearchForm;
