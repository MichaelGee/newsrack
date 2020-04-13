import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import WorldCards from './components/world/worldcards';
import ScienceCards from './components/science/sciencecards';
import MoviesCards from './components/movies/moviescards';
import SportsCards from './components/sports/sportscards';
import axios from 'axios';

function App() {
  const dummyImg = './assets/news.jpg';
  /* World News */
  // const [worldImage, setWorldImage] = useState('');
  // const [worldTitle, setWorldTitle] = useState('');
  // const [worldAbstract, setWorldAbstract] = useState('');
  // const [worldByLine, setWorldByLine] = useState('');
  // const [worldTime, setWorldTime] = useState('');
  // const [worldUrl, setWorldUrl] = useState('');

  /* Sports News */
  // const [sportImage, setSportImage] = useState('');
  // const [sportTitle, setSportTitle] = useState('');
  // const [sportAbstract, setSportAbstract] = useState('');
  // const [sportByLine, setSportByLine] = useState('');
  // const [sportTime, setSportTime] = useState('');
  // const [sportUrl, setSportUrl] = useState('');

  /* Entertainment News */
  // const [movieImage, setMovieImage] = useState('');
  // const [movieTitle, setMovieTitle] = useState('');
  // const [movieAbstract, setMovieAbstract] = useState('');
  // const [movieByLine, setMovieByLine] = useState('');
  // const [movieTime, setMovieTime] = useState('');
  // const [movieUrl, setMovieUrl] = useState('');

  /* Science News */
  // const [scienceImage, setScienceImage] = useState('');
  // const [scienceTitle, setScienceTitle] = useState('');
  // const [scienceAbstract, setScienceAbstract] = useState('');
  // const [scienceByLine, setScienceByLine] = useState('');
  // const [scienceTime, setScienceTime] = useState('');
  // const [scienceUrl, setScienceUrl] = useState('');

  /* World */
  useEffect(() => {
    axios
      .get(
        // `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`,
        `https://api.nytimes.com/svc/topstories/v2/arts.json?api-key=${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        /*   console.log(res.data.results[0]); */
        // const dataData = res.data.results[0];
        const dataFromAPI = res.data.results;
        const newsArray = dataFromAPI.map((news) => news).slice(0, 10);
        console.log('news: ', newsArray);
        const articles = newsArray.map((article) => {
          return {
            img:
              article.multimedia[0].url !== null
                ? article.multimedia[0].url
                : dummyImg,
            imgCaption:
              article.multimedia[0].caption !== ''
                ? article.multimedia[0].caption
                : 'N/A',
          };
        });

        // const imageUrl = dataData.multimedia[items].url;
        // const imageUrl = dataFromAPI.map((media) => multimedia);
        // const allImage = imageUrl.map((img) => img.url);
        // console.log("img: ", allImage);
        // setWorldImage(imageUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <h1>World News</h1>
      <div className="word-wrapper">
        <WorldCards />
      </div>
      <h1>Sports</h1>
      <div className="science-wrapper">
        <ScienceCards />
      </div>
      <h1>Entertainment</h1>
      <div className="movie-wrapper">
        <MoviesCards />
      </div>
      <h1>Science</h1>
      <div className="sports-wrapper">
        <SportsCards />
      </div>
    </div>
  );
}

export default App;
