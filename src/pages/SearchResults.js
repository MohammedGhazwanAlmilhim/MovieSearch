import React, { useState, useEffect } from 'react';
import MovieCards from '../components/MovieCards';


export default function SearchResults() {
    const [query, setSearch] = useState('');
    const [results, setResults] = useState([]);

    const API_KEY = '13979d45';

    const getMovies = async () => {
        const response = await fetch(`https://www.omdbapi.com/?s=James+Bond&type=movie&apikey=${API_KEY}`);
        const data = await response.json();
        setResults(data.Search);
    };

    useEffect(() => {
        getMovies();
    }, []);

    const handleSearch = async (event) => {
        const newQuery = event.target.value;
        setSearch(newQuery);

        const response = await fetch(`https://www.omdbapi.com/?s=${newQuery.length < 3 ? 'James Bond' : newQuery}&type=movie&apikey=${API_KEY}`);
        const data = await response.json();

        if (data.Response && data.Search) {
            setResults(data.Search);
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return <MovieCards results={results} query={query} handleSearch={handleSearch} handleSubmit={handleSubmit} />;
};


