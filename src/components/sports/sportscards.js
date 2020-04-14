import React from "react";

const SportsCards = ({ news }) => {
  return (
    <div className='card-container'>
      <div className='shadow-lg rounded-lg bg-white max-w-sm m-8 p-4 notification-box'>
        <div className='text-sm pb-2'>
          <img
            src={news?.img || "../assets/news.jpg"}
            loading='lazy'
            alt='news-article'
          />
        </div>
        <div className='text-sm text-gray-600 font-bold tracking-tight '>
          {news?.title}
        </div>
        <div className='text-sm text-gray-800  tracking-tight '>
          {news?.abstract}
        </div>
        <p>{news?.byline}</p>
        <p>{new Date(news?.release_date).toDateString()}</p>
      </div>
    </div>
  );
};

export default SportsCards;
