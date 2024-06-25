const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();
const port = 3000;
const apiKey = '07a603be26fe82fc8a9b9764a6d43b15'; // Replace with your actual TMDB API key

// MySQL connection pool using mysql2
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'root', // Replace with your MySQL password
    database: 'moviedb'
});

app.use(cors());
app.use(bodyParser.json());

app.get('/api/movies/:endpoint', async (req, res) => {
    const { endpoint } = req.params;
    const { page = 1, query = '' } = req.query;

    let url = `https://api.themoviedb.org/3/movie/${endpoint}?api_key=${apiKey}&page=${page}`;
    if (endpoint === 'search') {
        url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}&page=${page}`;
    }

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching data from TMDB API:', error);
        res.status(500).json({ error: 'An error occurred while fetching data from TMDB API' });
    }
});

app.get('/api/movie/:id', async (req, res) => {
    const { id } = req.params;

    console.log(`Fetching details for movie ID: ${id}`); // Log movie ID
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
    console.log(`Requesting URL: ${url}`); // Log request URL

    try {
        const response = await axios.get(url);
        res.json(response.data);
    } catch (error) {
        console.error('Error fetching movie details from TMDB API:', error.message);
        res.status(500).json({ error: 'An error occurred while fetching movie details from TMDB API' });
    }
});

app.post('/api/favourites', (req, res) => {
    const movie = req.body.movie;

    const { id, title, poster_path, overview, release_date, vote_average } = movie;

    const insertQuery = `INSERT INTO favourite (movie_id, title, poster_path, overview, release_date, vote_average) VALUES (?, ?, ?, ?, ?, ?)`;
    const values = [id, title, poster_path, overview, release_date, vote_average];

    pool.execute(insertQuery, values, (error, results, fields) => {
        if (error) {
            console.error('Error adding movie to favourites:', error.message);
            return res.status(500).json({ error: 'Failed to add movie to favourites.' });
        }

        console.log('Movie added to favourites:', movie);
        res.status(201).json({ message: 'Movie added to favourites', movie });
    });
});

app.get('/api/favourites', (req, res) => {
    const selectQuery = `SELECT * FROM favourite`;

    pool.query(selectQuery, (error, results, fields) => {
        if (error) {
            console.error('Error fetching favourites:', error.message);
            return res.status(500).json({ error: 'Failed to fetch favourites.' });
        }

        res.json(results);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
