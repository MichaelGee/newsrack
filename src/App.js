import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Banner from './components/banner';
import WorldCards from './components/world/worldcards';
import ScienceCards from './components/science/sciencecards';
import MoviesCards from './components/movies/moviescards';
import SportsCards from './components/sports/sportscards';
import { fetchData } from './components/api/apicall';
import { v4 as uuidv4 } from 'uuid';

function App() {
  // const dummyImg = './assets/news.jpg';
  /* World News */
  const [worldData, setWorldData] = useState('');
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

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchData('world');
        const newsArray = data.results.slice(0, 10);
        const articles = newsArray.map((article) => {
          return {
            img: article.multimedia[0].url,
            imgCaption:
              article.multimedia[0].caption !== ''
                ? article.multimedia[0].caption
                : 'N/A',
            title: article.title,
            abstract: article.abstract,
            byline: article.byline,
            release_date: article.created_date,
            url: article.short_url,
          };
        });
        console.log('articles', articles);
        setWorldData(articles);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Banner />
      <h1>World News</h1>
      {/* <div className="word-wrapper">
        <WorldCards /> */}
      <div className="word-wrapper">
        {/* {worldData !== [] &&
          worldData.map((article) => (
            <WorldCards key={uuidv4()} data={article} />
          ))} */}
        <WorldCards data={worldData} />
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
