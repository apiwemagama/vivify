import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [error, setError] = useState('');
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/movie/${id}`);
                setMovie(response.data);
                setGenres(response.data.genres);
                
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
            <div className="grid grid-cols-12 gap-4 p-4">
                <div className="col-span-3 bg-blue-200 p-4">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full mb-4" />
                </div>
                <div className="col-span-9 bg-green-200 p-4">
                    <h1 className="text-3xl text-white font-bold mb-4">{movie.title}</h1>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="space-x-4 col-span-6 bg-black-200">
                        
                        {genres.map(genre => (
                            <span className="badge bg-gray-500 text-white rounded-full pt-1 pl-4 pb-2 pr-4 ">{genre.name}</span>
                        ))}
                        </div>
                        <div className="col-span-6 bg-red p-4">B</div>
                    </div>
                </div>
            </div>
            
            <p className="mb-4">{movie.overview}</p>
            <p className="mb-2">Release Date: {movie.release_date}</p>
            <p className="mb-2">Rating: {movie.vote_average}</p>
            <button onClick={addToFavourites} className="bg-blue-500 text-white px-4 py-2 mt-4">Add to Favourites</button>
        </div>
    );
};

export default MovieDetails;
