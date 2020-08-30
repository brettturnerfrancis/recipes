import React from 'react';
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import Recipe from './Recipe';
import { mockData } from '../mock/mockData';

const mockRecipe = mockData[0];

describe('recipe', () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container = null;
    });

    it('displays the title', () => {
        act(() => {
            ReactDOM.render(<Recipe recipe={mockRecipe} />, container);
        });

        const title = container.querySelector('[data-id="recipe-name"]');

        expect(title.textContent).toBe(mockRecipe.name);
    })

    it('displays the recipe source', () => {
        act(() => {
            ReactDOM.render(<Recipe recipe={mockRecipe} />, container);
        });

        const source = container.querySelector('[data-id="recipe-source"]');

        expect(source.textContent).toBe(mockRecipe.source);
    })
});
