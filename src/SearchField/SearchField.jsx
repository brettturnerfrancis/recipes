import React, { useState, useEffect } from 'react';

function SearchField({updateSearchTerms}) {
    // searchTerms state is not lifted to parent because a future update will incorporate a debounce
    const [ searchTerms, setSearchTerms ] = useState('');

    const handleChange = ({target: {value}}) => {
        setSearchTerms(value);
        updateSearchTerms(value)
    }

    useEffect(() => {
        updateSearchTerms(searchTerms)
    }, [searchTerms])

    return (
        <input onChange={handleChange} value={searchTerms} />
    )
}

export default SearchField;