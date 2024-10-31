import React from 'react';
import MovieList from './MovieList';

const All = () => {
    return (
        <div>
            <MovieList endpoint="popular" />
        </div>
    );
};

export default All;
