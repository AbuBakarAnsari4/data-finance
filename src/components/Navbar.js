import React,{useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Navbar = () => {


        const [nav,setNav] = useState(true);

        const handleNav = () =>{
            setNav(!nav)
        }



  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        <h1 className='w-full text-3xl font-bold text-[#00df98]'><Link to="/">REACT.</Link></h1>
        <ul className='md:flex hidden'>
            <li className='p-4'><Link to="/">Home</Link></li>
            <li className='p-4'><Link>Company</Link></li>
            <li className='p-4'><Link>Resources</Link></li>
            <li className='p-4'><Link to="/about">About</Link></li>
            <li className='p-4'><Link to="contact">Contact</Link></li>
        </ul>
        <div onClick={handleNav} className='block md:hidden'>
            {!nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        </div>

        <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full  border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500':'fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-[#00df98] m-4'><Link to="/">REACT.</Link></h1>

        <ul className='uppercase p-4'>
            <li className='p-4 border-b border-gray-600'><Link to="/">Home</Link></li>
            <li className='p-4 border-b border-gray-600'><Link>Company</Link></li>
            <li className='p-4 border-b border-gray-600'><Link>Resources</Link></li>
            <li className='p-4 border-b border-gray-600'><Link to="/about">About</Link></li>
            <li className='p-4'><Link to="/contact">Contact</Link></li>
        </ul>
        </div>
    </div>
  )
}

export default Navbar
