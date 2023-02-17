import React from 'react';
import Image from '../assets/img/house-banner.png';
import Search from './Search';


const Banner = () => {
  return (
    <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
      <div className='flex flex-col lg:flex-row'>
        <div className='lg:ml-8 xl:ml-[135px] flex-col items-center 
        lg:items-start text-center lg:text-left justify-center
        flex-1 px-4 lg:px-0'>
          <h1><span>Rent</span> Your Dream House With Us.</h1>
          <p>
            lorem ipsum dolor si amet adadadasdsadasd
            asdasdsadasdaasdadasdsadasdasfafasfsafasfaf
            afafasfsafasf
          </p>
        </div>
        {/* image */}
        <div>
          <img src={Image} alt="" />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;