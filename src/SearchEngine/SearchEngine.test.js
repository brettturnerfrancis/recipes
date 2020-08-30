const { mockData } = require("../mock/mockData");
const { RecipeSearch } = require("./SearchEngine");

describe('Search Engine', () => {
    let searchEngine;
    
    beforeEach(() => {
        searchEngine = new RecipeSearch();
        searchEngine.init(mockData);
    })

    it('returns all records in an empty search', () => {
        const results = searchEngine.search('');
        expect(results).toBe(mockData);
    })

    it('returns records matching a term in the title', () => {
        const results = searchEngine.search('coffee');
        expect(results.length).toBe(1)
    })

    it('returns records matching a source', () => {
        const results = searchEngine.search('bon appetit');
        expect(results.length).toBe(2)
    })

    it('returns records matching a tag', () => {
        const results = searchEngine.search('snack');
        expect(results.length).toBe(1)
    })

    it('returns no results for a nonsensical search', () => {
        const results = searchEngine.search('nonsense');
        expect(results.length).toBe(0)
    })
})
