import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Cards = () => {
  const [image, setImage] = useState('');

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`,
      )
      .then((res) => {
        console.log(res.data.results[0]);
        const dataData = res.data.results[0];
        const dataFromAPI = res.data.results;
        const newsArray = dataFromAPI.map((news) => news);
        const items = newsArray.slice(0, 10);
        console.log('i: ', items);
        const imageUrl = dataData.multimedia[0].url;
        console.log('img: ', imageUrl);
        setImage(imageUrl);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <div className="shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box w-3/12">
        {/* <div className="text-sm pb-2">{image}</div> */}
        <div className="text-sm pb-2">
          <img src={image} alt="news-article" />
        </div>
        <div className="text-sm text-gray-600  tracking-tight ">
          I will never close automatically. This is a purposely very very long
          description that has many many characters and words.
        </div>
      </div>
    </div>
  );
};

export default Cards;
