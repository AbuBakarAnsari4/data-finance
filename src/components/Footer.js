import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare,
    FaGithubSquare
} from 'react-icons/fa'
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
<>
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
      <div>
      <h1 className='w-full text-3xl font-bold text-[#00df98]'>REACT.</h1>
      <p className='py-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque adipisci, deleniti quia corporis rem possimus facere ducimus, dolore incidunt laudantium quis. Modi aliquid, consectetur autem officiis mollitia velit architecto distinctio?</p>
      <div className='flex justify-between md:w-[75%] my-6'>
        <a href='https://www.facebook.com/AbuBakarAnsariOfficial' target="_blank"><FaFacebookSquare size={30}/></a>
        <a href='https://www.instagram.com/abubakaransari3932/' target="_blank"><FaInstagram size={30}/></a>
        <a href='https://twitter.com/AbuBakar5625' target="_blank"><FaTwitterSquare size={30}/></a>
        <a href='https://github.com/AbuBakarAnsari4' target="_blank"><FaGithubSquare size={30}/></a>
        <a href='https://dribbble.com/abubakaransari' target="_blank"><FaDribbbleSquare size={30}/></a>
      </div>
      </div>
      <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Solutions</h6>
            <ul>
                <li className='py-2 text-sm'>Analytics</li>
                <li className='py-2 text-sm'>Marketing</li>
                <li className='py-2 text-sm'>Commerce</li>
                <li className='py-2 text-sm'>Insights</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Support</h6>
            <ul>
                <li className='py-2 text-sm'>Pricing</li>
                <li className='py-2 text-sm'>Documentation</li>
                <li className='py-2 text-sm'>Guides</li>
                <li className='py-2 text-sm'>API Status</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Company</h6>
            <ul>
                <li className='py-2 text-sm'>About</li>
                <li className='py-2 text-sm'>Blog</li>
                <li className='py-2 text-sm'>Jobs</li>
                <li className='py-2 text-sm'>Press</li>
                <li className='py-2 text-sm'>Careers</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Legal</h6>
            <ul>
                <li className='py-2 text-sm'>Claim</li>
                <li className='py-2 text-sm'>Policy</li>
                <li className='py-2 text-sm'>Terms</li>
            </ul>
        </div>
      </div>
    </div>
    <div className='border-t p-2 '>
    <p className='text-center text-white'>Copyright© 2023 by <span className='text-[#00df9a]'>REACT.</span></p>
    </div>

</>
  )
}

export default Footer
