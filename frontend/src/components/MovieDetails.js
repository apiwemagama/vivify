import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/movie/${id}`);
                setMovie(response.data);
            } catch (error) {
                console.error('Error fetching movie details:', error.message);
                setError('Failed to load movie details.');
            }
        };

        fetchMovieDetails();
    }, [id]);

    const addToFavourites = async () => {
        try {
            const response = await axios.post(`http://localhost:3000/api/favourites`, { movie });
            alert('Movie added to favourites!');
        } catch (error) {
            console.error('Error adding movie to favourites:', error.message);
            alert('Failed to add movie to favourites.');
        }
    };

    if (error) return <div>{error}</div>;
    if (!movie) return <div>Loading...</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            

            <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full mb-4" />
            <p className="mb-4">{movie.overview}</p>
            <p className="mb-2">Release Date: {movie.release_date}</p>
            <p className="mb-2">Rating: {movie.vote_average}</p>
            <button onClick={addToFavourites} className="bg-blue-500 text-white px-4 py-2 mt-4">Add to Favourites</button>
        </div>
    );
};

export default MovieDetails;
