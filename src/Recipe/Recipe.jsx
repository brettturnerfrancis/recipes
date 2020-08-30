import React from 'react';

function Recipe({recipe}) {
    return (
        <div>
            <div data-id="recipe-name" className="recipe__name">{recipe.name}</div>
            <div data-id="recipe-source" className="recipe__source">{recipe.source}</div>
        </div>
    )
}

export default Recipe;
