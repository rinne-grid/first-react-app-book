import React from 'react';
import { SearchFormPropsType } from '../types/SearchFormPropsType';

const SearchForm = (props: SearchFormPropsType) => {
  return (
    <>
      <form onSubmit={props.getWeather}>
        <input
          type="text"
          placeholder="Tokyo"
          onChange={(e) => props.setKeyword(e.target.value)}
        />
        <button type="submit">検索</button>
      </form>
    </>
  );
};

export default SearchForm;
