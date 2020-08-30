import React from 'react';
import { act, create, update } from 'react-test-renderer';
import { mockData } from '../mock/mockData';
import SearchResults from './searchResults';
import Recipe from '../Recipe/Recipe';

describe('Search Results', () => {
    let component, instance, resultCount;

    beforeEach(() => {
        act(() => {
            component = create(<SearchResults results={mockData} filtered={false} />)
        });

        instance = component.root;
        resultCount = instance.findByProps({'data-id': 'result-count'});
    })

    it('loads a recipe card for each item in the data', () => {
        const cards = instance.findAllByType(Recipe);

        expect(cards.length).toBe(mockData.length);
    })

    it('sets the recipe prop for the Recipe component', () => {
        const firstCard = instance.findAllByType(Recipe)[0];

        expect(firstCard.props.recipe).toBe(mockData[0]);
    })

    it('reports record count for unfiltered results', () => {
        expect(resultCount.props.children.join('')).toBe('3 recipes available')
    })

    it('reports record count for filtered results', () => {
        act(() => {
            component.update(<SearchResults results={mockData} filtered={true} />)
        })

        expect(resultCount.props.children.join('')).toBe('3 recipes match your search')
    })
})
