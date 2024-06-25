import React, { useState } from 'react';
import MovieList from './MovieList';

const Search = () => {
    const [query, setQuery] = useState('');
    const [submittedQuery, setSubmittedQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedQuery(query);
    };

    return (
        <div>
            <h1>Search Movies</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    placeholder="Search for a movie" 
                />
                <button type="submit">Search</button>
            </form>
            {submittedQuery && <MovieList endpoint="search" query={submittedQuery} />}
        </div>
    );
};

export default Search;
