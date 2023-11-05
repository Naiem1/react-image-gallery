import { useState } from 'react';
import Header from '../components/header/Header';
import Gallery from './Gallery';
import Carousel from '../components/Carousel';

const Home = () => {
  

  return (
    <div className="w-[97%]">
      <Header />
      <Gallery />
    </div>
  );
};

export default Home;
