import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import tmdb from '../img/tmdb.png';
import clock from '../img/clock.png';

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
        <div className="container text-white mx-auto px-4 py-8">
            <div className="grid grid-cols-12 gap-4 p-4">
                <div className="col-span-3 p-4">
                    <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full mb-4" />
                </div>
                <div className="col-span-9 p-4">
                    <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
                    <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-6 bg-black-200">
                            <div className="col-span-12 space-x-1 pt-5 pb-4">
                                {genres.map(genre => (
                                    <span className="badge bg-gray-500 rounded-full pt-1 pl-4 pb-2 pr-4">{genre.name}</span>
                                ))}
                            </div>
                            <div className="col-span-12 flex items-center space-x-4">
                                <img src={tmdb} className="w-10 object-cover"/><div> {movie.vote_average} / 10</div><img src={clock} className="w-6 object-cover"/><div> {movie.runtime} m</div>
                            </div>
                            <div className="col-span-12 flex items-center space-x-4 pt-6">
                                <p>{movie.overview}</p>
                            </div>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-6 flex items-center space-x-4">
                                    s
                                </div>
                                <div className="col-span-6 flex items-center space-x-4">
                                    <button onClick={addToFavourites} className="bg-[#ff6900] hover:bg-[#ff9200] rounded-lg text-white px-4 py-2 mt-4">Add to Favourites</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-6 bg-red p-4">B</div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default MovieDetails;
