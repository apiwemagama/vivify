import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';

const MovieList = ({ endpoint, query }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [backdropPath, setBackdropPath] = useState('');
    const [originalTitle, setOriginalTitle] = useState('');
    const [tagLine, setTagLine] = useState('');
    const location = useLocation();
    
    const shouldHideContent = location.pathname === '/search'

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/movies/${endpoint}`, {
                    params: { page, query },
                });
                setMovies(response.data.results);
                setTotalPages(response.data.total_pages);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchMovies();
    }, [endpoint, page, query]);
    useEffect(() => {
        const fetchRandomBackdrop = async () => {
            try {
                // Fetch a list of popular movies
                const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=07a603be26fe82fc8a9b9764a6d43b15`);
                
                // Get the results array
                const movies = response.data.results;

                // Select a random movie from the array
                if (movies.length > 0) {
                    const randomIndex = Math.floor(Math.random() * movies.length);
                    const randomMovie = movies[randomIndex];

                    // Update state with the random movie's details
                    setBackdropPath(randomMovie.backdrop_path);
                    setOriginalTitle(randomMovie.original_title);
                    setTagLine(randomMovie.tag_line);
                }
            } catch (error) {
                console.error('Error fetching backdrop', error);
            }
        };

        fetchRandomBackdrop();
    }, []);
    return (
        <div>
        {!shouldHideContent && (
            <header className="text-white relative">
                <div className="mx-auto">
                    {backdropPath && (
                        <div>
                            <img 
                                className="w-full h-100 object-cover mb-4" 
                                src={`https://image.tmdb.org/t/p/w500${backdropPath}`} 
                                alt="Backdrop" 
                            />
                            <div className="absolute inset-0 flex flex-col justify-center items-start px-4 bg-black bg-opacity-50"> {/* Overlay for text */}
                                <h1 className="text-3xl font-bold mb-2">{originalTitle}</h1>
                                <h2 className="text-lg mb-4">{tagLine}</h2>
                                <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg shadow">
                                    Trailer
                                </button>
                            </div>
                        </div>
                    )}
                    
                </div>
            </header>
            )}
            <div className="container mx-auto px-4">
                <div className="font-bold text-white text-xl py-4">Continue watching</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {movies.map(movie => (
                        <div className="max-w-sm rounded overflow-hidden shadow-lg">
                            <div key={movie.id}>
                                <Link to={`/movie/${movie.id}`}>
                                    <img class="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                                </Link>
                                <div className="py-4">
                                    <div className="font-bold text-white text-sm">{movie.title}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center p-4">
                    <div className="flex items-center space-x-4">
                        <button 
                            disabled={page === 1} 
                            onClick={() => setPage(page - 1)} 
                            className={`px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${page === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Previous
                        </button>

                        <span className="text-gray-700">Page {page} of {totalPages}</span>

                        <button 
                            disabled={page === totalPages} 
                            onClick={() => setPage(page + 1)} 
                            className={`px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${page === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}
                        >
                            Next
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieList;