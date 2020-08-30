import React from 'react';
import { act, create } from 'react-test-renderer';
import App from './App';
import SearchResults from './SearchResults/searchResults';

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

    expect(searchResults.props.results.length).toBeDefined()
  })
})
