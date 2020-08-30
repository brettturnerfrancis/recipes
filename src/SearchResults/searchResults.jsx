import React, { useState, useEffect } from 'react';
import Recipe from '../Recipe/Recipe';
import './SearchResults.css';

function SearchResults({ results, filtered }) {
    const [filterText, setFilterText] = useState();

    const recipes = results.map(result =>
        <Recipe
            key={result.id}
            recipe={result} />
    );

    const buildTextString = () => {
        const recipes = results.length === 1 ? 'recipe' : 'recipes',
            match = results.length === 1 ? 'matches' : 'match';

        if (filtered) {
            return `${results.length} ${recipes} ${match} your search`
        } else {
            return `${results.length} ${recipes} available`
        }
    }

    useEffect(() => {
        setFilterText(buildTextString())
    }, [results, filtered])

    return (
        <>
            <div data-id="result-count" className="results__result-count">{filterText}</div>
            <div>{recipes}</div>
        </>
    )
}

export default SearchResults;
