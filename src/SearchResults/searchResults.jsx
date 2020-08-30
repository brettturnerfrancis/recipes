import React from 'react';
import Recipe from '../Recipe/Recipe';

function SearchResults({ results, filtered }) {
    const recipes = results.map(result =>
        <Recipe
            key={result.id}
            recipe={result} />
    ),
        resultText = filtered ? `match your search` : `available`;

    return (
        <>
            <div data-id="result-count">{results.length} recipes {resultText}</div>
            <div>{recipes}</div>
        </>
    )
}

export default SearchResults;
