import React from 'react';
import Recipe from '../Recipe/Recipe';

function SearchResults({ results }) {
    const recipes = results.map(result =>
        <Recipe
            key={result.id}
            recipe={result} />
    )

    return (
        <div>{recipes}</div>
    )
}

export default SearchResults;
