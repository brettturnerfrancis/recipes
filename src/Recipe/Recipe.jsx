import React from 'react';
import './Recipe.css';

function Recipe({recipe}) {
    return (
        <div className="recipe">
            <div data-id="recipe-name" className="recipe__name">{recipe.name}</div>
            <div data-id="recipe-source" className="recipe__source">{recipe.source}</div>
        </div>
    )
}

export default Recipe;
