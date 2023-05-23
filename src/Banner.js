import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";

const Banner = () => {
  const [movie, setmovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="content">
        <h1 className="title">
          {movie?.name || movie?.original_name || movie?.title}
        </h1>
        <div>
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <div className="description">{truncate(movie?.overview, 150)}</div>
      </div>

      <div className="banner--fadebottom" />
    </header>
  );
};

export default Banner;
