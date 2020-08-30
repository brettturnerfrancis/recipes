import React from 'react';
import { act, create } from 'react-test-renderer';
import { mockData } from '../../mock/mockData';
import SearchResults from './searchResults';
import Recipe from '../Recipe/Recipe';

describe('Search Results', () => {
    let component, instance;

    beforeEach(() => {
        act(() => {
            component = create(<SearchResults results={mockData} />)
        });

        instance = component.root;
    })

    it('loads a recipe card for each item in the data', () => {
        const cards = instance.findAllByType(Recipe);

        expect(cards.length).toBe(mockData.length);
    })

    it('sets the recipe prop for the Recipe component', () => {
        const firstCard = instance.findAllByType(Recipe)[0];

        expect(firstCard.props.recipe).toBe(mockData[0]);
    })
})
