import React from 'react';
import './Recipe.css';

function Recipe({recipe}) {
    return (
        <a className="recipe" target="_blank" href={recipe.location}>
            <div data-id="recipe-name" className="recipe__name">{recipe.name}</div>
            <div data-id="recipe-source" className="recipe__source">{recipe.source}</div>
        </a>
    )
}

export default Recipe;
