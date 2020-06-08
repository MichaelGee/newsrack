import React from "react";

const Banner = () => {
  let today = new Date();
  let curHr = today.getHours();
  return (
    <div className='my-6'>
      <div className='text-center'>
        <h1 className='md:text-6xl lg:text-4xl font-medium'>
          {curHr < 12
            ? "Good Morning"
            : curHr < 18
            ? "Good Afternoon"
            : "Good Evening"}
        </h1>
        <h1 className='md:text-4xl lg:text-1xl'>Top News</h1>
      </div>
    </div>
  );
};

export default Banner;
