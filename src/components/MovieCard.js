import { Link } from 'react-router-dom';

function MovieCard({ id, title, poster }) {
  const posterUrl = poster !== 'N/A' ? poster : 'https://picsum.photos/200/300';
  const altText = `Poster image of the movie ${title}.`;
  return (
    <article className="movie-card">
      <figure>
        <img src={posterUrl} alt={altText} />
      </figure>
      <h3>{title}</h3>
      <Link to={`/about-movie/${id}`}>Les mer</Link>
    </article>
  );
}

export default MovieCard;
