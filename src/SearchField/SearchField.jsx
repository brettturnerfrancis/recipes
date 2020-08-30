import React, { useState, useEffect } from 'react';
import './SearchField.css';

function SearchField({ updateSearchTerms }) {
    // searchTerms state is not lifted to parent because a future update will incorporate a debounce
    const [searchTerms, setSearchTerms] = useState('');

    const handleChange = ({ target: { value } }) => {
        setSearchTerms(value);
        updateSearchTerms(value)
    }

    useEffect(() => {
        updateSearchTerms(searchTerms)
    }, [searchTerms])

    return (
        <div className="search-field">
            <input className="search-field__input" onChange={handleChange} value={searchTerms} placeholder="find recipes" />
        </div>
    )
}

export default SearchField;