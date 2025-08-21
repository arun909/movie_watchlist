import React, { useState } from "react";
import "../styles/Watchlist.css";

enum Status {
  Watched = "Watched",
  ToWatch = "To Watch",
}

// Map each status to a color
const statusColors: Record<Status, string> = {
  [Status.Watched]: "#4CAF50", // green
  [Status.ToWatch]: "#FF9800", // orange
};

type Movie = [string, number, Status];

const Watchlist: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [status, setStatus] = useState<Status>(Status.ToWatch);

  const addMovie = () => {
    if (name.trim() === "") return;
    setMovies([...movies, [name, rating, status]]);
    setName("");
    setRating(1);
    setStatus(Status.ToWatch);
  };

  const deleteMovie = (index: number) => {
    setMovies(movies.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1>Movie Watchlist</h1>

      {/* Add Movie Form */}
      <div className="form">
        <input
          type="text"
          placeholder="Movie Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Rating"
          min={1}
          max={10}
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value as Status)}
        >
          <option value={Status.Watched}>{Status.Watched}</option>
          <option value={Status.ToWatch}>{Status.ToWatch}</option>
        </select>
        <button onClick={addMovie}>Add Movie</button>
      </div>

      {/* Movie Table */}
      <table>
        <thead>
          <tr>
            <th>Movie Name</th>
            <th>Rating</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(([name, rating, status], index) => (
            <tr key={index}>
              <td>{name}</td>
              <td>{rating}</td>
              <td style={{ color: statusColors[status], fontWeight: "bold" }}>
                {status}
              </td>
              <td>
                <button
                  className="delete-btn"
                  onClick={() => deleteMovie(index)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
