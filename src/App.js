import React, { useState } from 'react';
import { mockData } from '../mock/mockData';  //TODO: replace with live data
import './App.css';
import SearchResults from './SearchResults/searchResults';

function App() {
  const [searchResults, setSearchResults] = useState(mockData);
  
  return (
    <div className="App">
      <SearchResults results={mockData} />
    </div>
  );
}

export default App;
