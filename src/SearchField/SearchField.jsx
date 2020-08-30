import React, { useState } from 'react';

function SearchField({updateSearchTerms}) {
    const [ searchTerms, setSearchTerms ] = useState('');

    const handleChange = ({target: {value}}) => {
        setSearchTerms(value);
        updateSearchTerms(value)
    }

    return (
        <input onChange={handleChange} value={searchTerms} />
    )
}

export default SearchField;