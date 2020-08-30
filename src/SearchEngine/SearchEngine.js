const elasticlunr = require('elasticlunr');

export class RecipeSearch {
    init = (recipes) => {
        this.recipes = recipes;
        this.searchIndex = this.initSearchIndex();
    }

    search = (terms) => {
        if (terms.replace(/\s/g, '').length) {
            const matches = [];
            this.searchIndex.search(terms, {expand: true}).forEach(result => {
                matches.push(result)
            })
            return matches;
        } else {
            return this.recipes;
        }
    }

    initSearchIndex = () => {
        let searchIndex = elasticlunr(function() {
            this.addField('name');
            this.addField('source');
            this.addField('tags');
            this.setRef('id')
        })

        this.recipes.forEach(recipe => {
            searchIndex.addDoc(recipe)
        });

        return searchIndex;
    }
}