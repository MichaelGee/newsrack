import React from 'react';

const SportsCards = ({ news }) => {
  // console.log('from world-js', news);

  return (
    <div>
      <div className="shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box w-3/12">
        <div className="text-sm pb-2">
          <img
            src={news?.img || '../assets/news.jpg'}
            loading="lazy"
            alt="news-article"
          />
        </div>
        <div className="text-sm text-gray-600 font-bold tracking-tight ">
          {news?.title}
        </div>
        <div className="text-sm text-gray-800  tracking-tight ">
          {news?.abstract}
        </div>
      </div>
    </div>
  );
};

export default SportsCards;
