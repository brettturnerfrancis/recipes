import React, { useState, useEffect } from 'react';
import { mockData } from './mock/mockData';  //TODO: replace with live data
import './App.css';
import SearchResults from './SearchResults/SearchResults';
import { RecipeSearch } from './SearchEngine/SearchEngine';
import SearchField from './SearchField/SearchField';

const searchEngine = new RecipeSearch();

function App() {
  const [searchResults, setSearchResults] = useState([]);
  const [isFiltered, setIsFiltered] = useState(false);

  const onSearchTermChange = (terms) => {
    setSearchResults(searchEngine.search(terms));
    setIsFiltered(terms.length > 0)
  }

  searchEngine.init(mockData)

  useEffect(() => {
    setSearchResults(searchEngine.search(''));
  }, [])

  return (
    <div className="App">
      <SearchField updateSearchTerms={onSearchTermChange} />
      <SearchResults results={searchResults} filtered={isFiltered} />
    </div>
  );
}

export default App;
