import React from "react";
import Logo from "../assets/newspaper.png";

const Navbar = () => {
  return (
    <div>
      <div className='navbar-container'>
        <div className='container navbar mx-auto px-4'>
          <div className='flex items-center md:justify-between py-4'>
            <div className='w-1/4 md:hidden'>
              <svg fill='currentColor' viewBox='0 0 20 20' class='w-6 h-6'>
                <path
                  x-show='!open'
                  fill-rule='evenodd'
                  d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z'
                  clip-rule='evenodd'
                ></path>
              </svg>
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
