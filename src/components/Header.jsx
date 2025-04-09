import React from 'react'
import Hamburger from '../assets/Hamburger_icon.webp'
import Youtube from '../assets/YouTube_Logo.png'
import UserIcon from '../assets/user-icon.png'
import SearchIcon from '../assets/search-icon.svg'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice'
import { Link } from 'react-router-dom';

const Header = () => {

    const dispatch = useDispatch();
    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-cols-12 p-4 border-b-1 border-gray-200'>
            <section className='flex items-center col-span-1'>
                <img alt='ham-icon' src={Hamburger} className='h-7 cursor-pointer' onClick={() => toggleMenuHandler()} />
                <Link to="/">
                    <img alt='ham-icon' src={Youtube} className='h-6 mx-2' />
                </Link>
            </section>
            <section className='flex justify-center col-span-10'>
                <input type='text'
                    className='w-[40%] border-1 border-gray-400 rounded-l-full px-2 py-1 focus:border-blue-500 focus:outline-1 focus:outline-blue-500'
                />
                <button
                    className='bg-gray-200 border-1 border-gray-400 rounded-r-full px-3 py-1 hover:bg-gray-300'
                >
                    <img alt='search-icon' src={SearchIcon} className='h-6 p-1' />
                </button>
            </section>
            <section className=' col-span-1'>
                <div
                    className='flex justify-center border border-sky-500 rounded-full px-2 py-1 cursor-pointer'>
                    <img alt='user-icon' src={UserIcon} className='h-7 mr-1' />
                    <p className='font-semibold text-sky-500'>sign in</p>
                </div>
            </section>
        </div>
    )
}

export default Header