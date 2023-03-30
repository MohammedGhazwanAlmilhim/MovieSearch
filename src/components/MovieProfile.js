import React from 'react';

const MovieProfile = ({ movie }) => {
    const posterUrl = movie.Poster !== 'N/A' ? movie.Poster : 'https://picsum.photos/200/300';
    const altText = `Poster image of the movie ${movie.Title}.`;

    return (
        <section id='movie-profile-container' style={{ background: `url(${posterUrl})` }}>
            <section id='glass-effect'>
                <section id='movie-profile'>
                    <section id='poster-container'>
                        <img src={posterUrl} alt={altText} />
                    </section>
                    <section id='movie-text'>
                        <h2>{movie.Title}</h2>
                        <p><b>Release year: </b>{movie.Year}</p>
                        <p><b>Genre: </b>{movie.Genre}</p>
                        <p><b>Director: </b>{movie.Director}</p>
                        <p><b>Runtime: </b>{movie.Runtime}</p>
                        <p><b>Actors: </b>{movie.Actors}</p>
                        <p><b>Awards:</b>{movie.Awards}</p>
                        <p><b>IMDB Rating: </b>{movie.imdbRating}</p>
                        <p><b>Plot: </b>{movie.Plot}</p>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default MovieProfile;
