import React from "react";

const MoviesCards = ({ news }) => {
  return (
    <a href={news?.url} target='_blank' rel='noopener noreferrer'>
      <div className='card-container'>
        <div className='shadow-lg card rounded-lg bg-white max-w-sm m-8 p-4 notification-box w-10/12'>
          <div className='text-sm pb-2'>
            <img
              src={news?.img || "../assets/news.jpg"}
              loading='lazy'
              alt='news-article'
            />
          </div>
          <div className='title text-sm text-black font-bold tracking-tight '>
            {news?.title}
          </div>
          <div className='text-sm text-gray-800  tracking-tight '>
            {news?.abstract}
          </div>
          <p>{news?.byline}</p>
          <p>{new Date(news?.release_date).toDateString()}</p>
        </div>
      </div>
    </a>
  );
};

export default MoviesCards;
