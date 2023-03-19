import React from 'react';
import smart from './assets/about-first.png'
import analytics from './assets/analytics.png'
import innovation from './assets/innovation.png'
import insights from './assets/insights.png'
import issureloyalty from './assets/issureloyalty.png'
import merchantloyalty from './assets/merchantloyalty.png'
import test from './assets/test.png'
import consulting from './assets/consulting.png'
import marketing from './assets/marketing.png'
import personalization from './assets/personalization.png'

const About = () => {
  return (
    <div>
      <div className='mb-9 bg-[#00df9a] py-12'>
                <h1 className='text-black text-center text-5xl font-bold uppercase'>About</h1>
      </div>
      <div className='max-w-[1240px] mx-auto pt-9'>
        <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8'>
            <div className='text-white col-span-2 md:max-w-[85%] mx-9'>
                <h1 className='text-5xl my-3'>Smarter Decisions. Better Outcomes.</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus enim ab deleniti blanditiis. Nisi esse adipisci a dolores beatae?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis natus enim ab deleniti blanditiis. Nisi esse adipisci a dolores beatae?</p>
            </div>
            <div className='md:block hidden'>
                <img src={smart} alt="/" />
            </div>
        </div>
      </div>
    <div className='bg-[#f3f0ee] py-2 my-20'>
        <div className='max-w-[1240px] mx-auto my-20'>
            <p>With a focus on our customers and their needs, we’ve developed a highly curated and thoughtful suite of services. Each service area takes advantage of our data and technology, as well as our expertise and experience.</p>

           
            <div className='max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 my-28'>
                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={innovation} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>Innovation</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Ideation, rapid prototyping, product design and agile development programs</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={insights} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>Insights</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Actionable insights based on aggregated and anonymized transactions</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={analytics} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>analytics</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Pre-packaged or custom analytics, including benchmarking and propensity modeling</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={test} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>test & learn</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Tools to experiment and test multiple approaches to find the best path forward, as well as measure results</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={issureloyalty} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>ISSUER LOYALTY</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Card solutions to drive consumer engagement and preference</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={merchantloyalty} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>merchant loyalty</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>SaaS-based solutions to enable exceptional consumer experiences that engender loyalty</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={consulting} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>consulting </h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Hands-on expertise across industries and practices, supported by real-time data</p>
                    </div>
                </div>

                <div className='w-full shadow-xl flex flex-col bg-white p-4 my-4 h-full rounded-lg hover:scale-105 duration-300'>
                    <img className='w-20 mx-auto  bg-transparent' src={marketing} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>Marketing Services</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>End-to-end marketing and campaign execution across the consumer lifecycle</p>
                    </div>
                </div>

                <div className=' duration-300 w-full shadow-lg bg-white flex flex-col p-4 my-4 h-full rounded-lg hover:scale-105'>
                    <img className='w-20 mx-auto  bg-transparent' src={personalization} alt="/" />
                    <h2 className='text-xl uppercase font-medium text-center pt-8'>personalization</h2>
                    <div className='text-center font-normal '>
                        <p className='py-2 mx-8'>Operating system delivering personalized, optimized and synchronized digital customer experiences that enhance engagement and accelerate revenue</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
  )
}

export default About
