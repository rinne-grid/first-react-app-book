import React, { useState } from 'react';
import './App.css';
import SearchForm from './components/SearchForm';

function App() {
  const [keyword, setKeyword] = useState('');

  return (
    <div className="App">
      <SearchForm setKeyword={setKeyword} keyword={keyword} />
    </div>
  );
}

export default App;
