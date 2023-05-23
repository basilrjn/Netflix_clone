import React from "react";
import "./Homescreen.css";
import Navbar from "../Navbar";
import Banner from "../Banner";
import requests from "../Requests";
import Row from "../Row";

const Homescreen = () => {
  return (
    <div>
      <Navbar />

      <Banner />
      <Row
        title="NetflixOriginals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="TopRated" fetchUrl={requests.fetchTopRated} />
      <Row title="ActionMovies" fetchUrl={requests.fetchActionMovies} />
      <Row title="ComedyMovies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="HorrorMovies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="RomanceMovies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
};

export default Homescreen;
