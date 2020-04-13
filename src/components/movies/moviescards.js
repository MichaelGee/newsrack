import React from "react";

const MoviesCards = () => {
  return (
    <div>
      <div className='shadow-lg rounded-lg bg-white mx-auto m-8 p-4 notification-box w-3/12'>
        {/* <div className="text-sm pb-2">{image}</div> */}
        <div className='text-sm pb-2'>
          {/* <img src={image} alt='news-article' /> */}
        </div>
        <div className='text-sm text-gray-600  tracking-tight '>
          I will never close automatically. This is a purposely very very long
          description that has many many characters and words.
        </div>
      </div>
    </div>
  );
};

export default MoviesCards;
