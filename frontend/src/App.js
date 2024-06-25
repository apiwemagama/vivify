import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Popular from './components/Popular';
import Search from './components/Search';
import MovieDetails from './components/MovieDetails';
import Favourites from './components/Favourites';
import Navbar from './components/Navbar';
import './App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/search" element={<Search />} />
                    <Route path="/movie/:id" element={<MovieDetails />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/" element={<Popular />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
