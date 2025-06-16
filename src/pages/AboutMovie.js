import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieProfile from "../components/MovieProfile";

const AboutMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState("");

  const API_KEY = process.env.REACT_APP_OMDB_API_KEY;

  useEffect(() => {
    const getMovies = async () => {
      const response = await fetch(
        `https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`
      );
      const data = await response.json();
      setMovie(data);
    };

    getMovies();
  }, [id]);

  return <MovieProfile movie={movie} />;
};

export default AboutMovie;
