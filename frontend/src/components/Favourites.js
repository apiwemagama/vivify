import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Favourites = () => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const fetchFavourites = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/favourites');
                setFavourites(response.data);
            } catch (error) {
                console.error('Error fetching favourites:', error.message);
            }
        };

        fetchFavourites();
    }, []);

    if (!favourites.length) return <div>No favourites added yet.</div>;

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Favourites</h1>
            <div className="grid grid-cols-3 gap-4">
                {favourites.map((movie) => (
                    <div key={movie.id} className="bg-white shadow-md rounded p-4">
                        <h2 className="text-xl font-bold mb-2">{movie.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} className="w-full mb-2" />
                        <p>{movie.overview}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Favourites;
