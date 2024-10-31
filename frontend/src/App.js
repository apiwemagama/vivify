import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Updated import
import All from './components/All';
import Search from './components/Search';
import MovieDetails from './components/MovieDetails';
import Favourites from './components/Favourites';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar /> {/* Updated component */}
                <Routes>
                    <Route path="/" element={<All />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/favourites" element={<Favourites />} />
                </Routes>
            </div>
        </Router>              
    );
};

export default App;