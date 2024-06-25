import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto">
                <Link to="/" className="text-white mr-4">Home</Link>
                <Link to="/search" className="text-white mr-4">Search</Link>
                <Link to="/favourites" className="text-white">Favourites</Link>
            </div>
        </nav>
    );
};

export default Navbar;
