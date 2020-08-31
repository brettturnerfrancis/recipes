import React from 'react';
import ReactDOM from 'react-dom';
import { act, create } from 'react-test-renderer';
import Recipe from './Recipe';
import { mockData } from '../mock/mockData';

const mockRecipe = mockData[0];

describe('recipe', () => {
    let component, instance;

    beforeEach(() => {
        act(() => {
            component = create(<Recipe recipe={mockRecipe} />)
        });

        instance = component.root;
    })

    it('displays the title', () => {
        const title = instance.findByProps({'data-id':'recipe-name'});
        expect(title.props.children).toBe(mockRecipe.name);
    })

    it('displays the recipe source', () => {
        const source = instance.findByProps({'data-id':'recipe-source'});
        expect(source.props.children).toBe(mockRecipe.source);
    })

    it('links to the related file', () => {
        const link = instance.children[0]; 
        expect(link.type).toBe('a')
        expect(link.props.target).toBe('_blank');
        expect(link.props.href).toBe(mockRecipe.location)
    })
});
