import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const MovieList = ({ endpoint, query }) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

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

    return (
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {movies.map(movie => (
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-500">
                        <div key={movie.id}>
                            <Link to={`/movie/${movie.id}`}>
                                <img class="w-full h-full object-cover" src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                            </Link>
                            <div className="px-6 py-4">
                                <div className="font-bold text-sm mb-2">{movie.title}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex items-center justify-between p-4 bg-white shadow rounded-lg">
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
        
    );
};

export default MovieList;