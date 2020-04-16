import React from "react";
import Logo from "../assets/newspaper.png";

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
        <div className='container navbar mx-auto px-4'>
          <div className='flex items-center md:justify-between py-4'>
            <div className='w-1/4 md:hidden'>
              {/* <svg
                className='fill-current text-black h-8 w-8'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
              >
                <path d='M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z' />
              </svg> */}
            </div>

            <div className='flex w-1/2 md:w-auto text-center text-black text-2xl font-medium'>
              <img
                src={Logo}
                alt='newpaper_logo'
                className='w-8 sm:w-10 mr-2'
              />
              <div className='logo'>NewSRacK</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
