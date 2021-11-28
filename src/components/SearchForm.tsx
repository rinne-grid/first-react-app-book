import React from 'react';
import { useState } from 'react';

type SearchFormPropsType = {
  setKeyword: React.Dispatch<React.SetStateAction<string>>;
  getWeather: (e: React.FormEvent<HTMLFormElement>) => void;
};

const SearchForm = (props: SearchFormPropsType) => {
  return (
    <>
      <form onSubmit={props.getWeather}>
        <input type="text" onChange={(e) => props.setKeyword(e.target.value)} />
        <button type="submit">検索</button>
      </form>
    </>
  );
};

export default SearchForm;
