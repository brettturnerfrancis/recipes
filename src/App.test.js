import React from 'react';
import { act, create } from 'react-test-renderer';
import App from './App';
import SearchResults from './SearchResults/SearchResults';
import SearchField from './SearchField/SearchField';
import { mockData } from './mock/mockData';

describe('App', () => {
  const setSearchValue = (clear) => {
    const terms = clear ? '' : 'coffee';
    const searchField = instance.findByType(SearchField);
    searchField.props.updateSearchTerms(terms)
  };

  let component, instance, searchResults;

  beforeEach(() => {
    act(() => {
      component = create(<App />)
    });

    instance = component.root;
    searchResults = instance.findByType(SearchResults);
  });
  
  it('passes a collection of recipes to the search results component', () => {
    expect(searchResults.props.results.length).toBe(mockData.length)
  })

  it('sets the filtered state for the search results component', () => {
    act(setSearchValue, 'coffee');
    expect(searchResults.props.filtered).toBeTruthy();
    act(() => setSearchValue(true));
    expect(searchResults.props.filtered).toBeFalsy();
  })

  it('integrates keyword search with search results', () => {
    act(setSearchValue);
    expect(searchResults.props.results[0].name).toBe('Coffee Creme Caramel')
  })
})
