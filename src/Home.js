import React from 'react';
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";

import Hero from "./components/Hero";

import NewsLater from "./components/NewsLater";

const Home = () => {
  return (
    <div>
      
      <Hero/>
      <Analytics/>
      <NewsLater/>
      <Cards/>
      
    </div>
  )
}

export default Home
