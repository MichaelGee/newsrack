import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import WorldCards from "./components/world/worldcards";
import BusinessCards from "./components/science/sciencecards";
import MoviesCards from "./components/movies/moviescards";
import SportsCards from "./components/sports/sportscards";
import { fetchData } from "./components/api/apicall";
import { v4 as uuidv4 } from "uuid";
import { newsArray } from "./components/api/apicall";

function App() {
  /* World News */
  const [worldData, setWorldData] = useState([]);
  /* Sports News */
  const [sportData, setSportData] = useState([]);
  /* Science News */
  const [businessData, setBusinessData] = useState([]);
  /* Entertainment */
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        // World
        const dataForWorld = await fetchData("world");
        const worldArticles = newsArray(dataForWorld);

        // Sports
        const dataForSports = await fetchData("sports");
        const sportsArticles = newsArray(dataForSports);

        // Science
        const dataForBusiness = await fetchData("business");
        const businessArticles = newsArray(dataForBusiness);

        //Movies
        const dataForMovies = await fetchData("movies");
        const moviesArticles = newsArray(dataForMovies);

        setWorldData(worldArticles);
        setSportData(sportsArticles);
        setBusinessData(businessArticles);
        setMoviesData(moviesArticles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className='App'>
      <Navbar />
      <Banner />
      <h1>World News</h1>
      <div className='world-wrapper'>
        {worldData !== [] &&
          worldData?.map((article) => (
            <WorldCards key={uuidv4()} news={article} />
          ))}
      </div>
      <div className='sports-wrapper'>
        <h1>Sports</h1>
        {sportData !== [] &&
          sportData?.map((article) => (
            <SportsCards key={uuidv4()} news={article} />
          ))}
      </div>
      <h1>Business</h1>
      <div className='business-wrapper'>
        {businessData !== [] &&
          businessData?.map((article) => (
            <BusinessCards key={uuidv4()} news={article} />
          ))}
      </div>
      <h1>Entertainment</h1>
      <div className='movies-wrapper'>
        {moviesData !== [] &&
          moviesData?.map((article) => (
            <MoviesCards key={uuidv4()} news={article} />
          ))}
      </div>
    </div>
  );
}

export default App;
