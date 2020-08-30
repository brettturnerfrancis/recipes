const elasticlunr = require('elasticlunr');

export class RecipeSearch {
    init = (recipes) => {
        this.recipes = recipes;
        this.searchIndex = this.initSearchIndex();
    }

    search = (terms) => {
        if (terms.replace(/\s/g, '').length) {
            return this.searchIndex.search(terms, {expand: true}).map(result => {
                return this.searchIndex.documentStore.docs[result.ref];
            })
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