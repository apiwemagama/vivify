import React from 'react';
import MovieList from './MovieList';

const Popular = () => {
    return (
        <div>
            <h1>Popular Movies</h1>
            <MovieList endpoint="popular" />
        </div>
    );
};

export default Popular;
