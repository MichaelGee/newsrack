import React from "react";

const Loader = () => {
  return (
    <div>
      <div className='w-full h-full fixed block top-0 left-0 opacity-75 z-0'>
        <span className='loader text-indigo-800 top-1/2 my-0 mx-auto block relative w-0 h-0'>
          <i className='fas fa-circle-notch fa-spin fa-2x'></i>
        </span>
      </div>
    </div>
  );
};

export default Loader;
