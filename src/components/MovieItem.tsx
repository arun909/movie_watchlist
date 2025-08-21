import React from "react";

const MovieItem: React.FC<{ movie: any }> = ({ movie }) => {
  return (
    <li>
      {movie[0]} | Rating: {movie[1]} | Status: {movie[2]}
    </li>
  );
};

export default MovieItem;