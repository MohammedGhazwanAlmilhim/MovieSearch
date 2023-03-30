import React from 'react';
import MovieCard from './MovieCard';
import SearchForm from './SearchForm';

const MovieCards = ({ handleSearch, handleSubmit, query, results }) => {
    return (
        <section id="movie-container">
            <SearchForm handleSearch={handleSearch} handleSubmit={handleSubmit} query={query} />
            <h2>Movies</h2>
            <div className="movie-cards">
                {results && results.map((movie) => (
                    <MovieCard key={movie.imdbID} id={movie.imdbID} title={movie.Title} poster={movie.Poster} actors={movie.Actors} />
                ))}
            </div>
        </section>
    );
};

export default MovieCards;
