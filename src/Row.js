import "./Row.css";
import { useState, useEffect } from "react";
import requests from "./Requests";
import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setmovies] = useState([]);
  console.log(fetchUrl);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setmovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.backdrop_path) ||
              (!isLargeRow && movie.poster_path)) && (
              <img
                className={`row_poster ${isLargeRow && "row_posterlarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt="{movie.name}"
              />
            )
        )}
      </div>
    </div>
  );
};
export default Row;
