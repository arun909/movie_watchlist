import React from "react";
import MovieItem from "./MovieItem";

const MovieList: React.FC<{ movies: any[] }> = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie, index) => (
        <MovieItem key={index} movie={movie} />
      ))}
    </ul>
  );
};

export default MovieList;
