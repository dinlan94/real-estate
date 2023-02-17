import HouseList from '../components/HouseList';
import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div className='min-h-[180px]'>
      <Banner />
      <HouseList />
    </div>
  );
};

export default Home;
