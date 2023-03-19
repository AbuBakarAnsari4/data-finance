import React from 'react';
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>Grow with Data.</h1>
        <div className='flex justify-center items-center '>
            <p className='md:text-4xl sm:text-3xl text-xl font-bold py-4'>Fast, Flexible Financing for</p>
            <Typed
            className='md:text-4xl sm:text-3xl text-xl font-bold md:pl-4 pl-2 text-[#6bffc4]'
            strings={['BTB','BTC','SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
            />
        </div>
        <p className='md:text-2xl text-xl md:mx-0 mx-2 font-bold text-gray-400'>Monitor Your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}

export default Hero
