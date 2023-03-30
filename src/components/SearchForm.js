import React from 'react';

export default function SearchForm({ handleSearch, handleSubmit, query }) {
    return (
        <section id='movie-search'>
            <h2>Search</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Search for a movie..." value={query} onChange={handleSearch} />
            </form>
        </section>
    );
}
