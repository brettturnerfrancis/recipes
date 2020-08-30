import React from 'react';
import { act, create } from 'react-test-renderer';
import App from './App';
import SearchResults from './SearchResults/SearchResults';
import SearchField from './SearchField/SearchField';
import { mockData } from './mock/mockData';

describe('App', () => {
  let component, instance;

  beforeEach(() => {
    act(() => {
      component = create(<App />)
    });

    instance = component.root;
  });
  
  it('passes a collection of recipes to the search results component', () => {
    const searchResults = instance.findByType(SearchResults);

    expect(searchResults.props.results.length).toBe(mockData.length)
  })

  it('integrates keyword search with search results', () => {
    const searchField = instance.findByType(SearchField);
    const searchResults = instance.findByType(SearchResults);

    act(() => {
      searchField.props.updateSearchTerms('coffee')
    })

    expect(searchResults.props.results[0].name).toBe('Coffee Creme Caramel')
  })
})
