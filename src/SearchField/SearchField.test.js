import React from 'react';
import { act, create } from 'react-test-renderer';
import SearchField from './SearchField';

const testString = 'sample search';

describe('Search Field', () => {
    const mockCalback = jest.fn();
    let component, instance, inputField;

    const simulateTextEntry = () => {
        inputField.props.onChange({ target: { value: testString }})
    }

    beforeEach(() => {
        act(() => {
            component = create(<SearchField updateSearchTerms={mockCalback} />)
        });

        instance = component.root;
        inputField = instance.findByType('input')
    })

    it('updates the input value on text changes', () => {
        act(simulateTextEntry);

        expect(inputField.props.value).toBe(testString);
    })

    it('calls the parent handler when search terms are updated', () => {
        act(simulateTextEntry);

        expect(mockCalback).toHaveBeenCalledWith(testString);
    })
})