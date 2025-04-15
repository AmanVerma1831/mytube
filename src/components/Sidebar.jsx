import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaHome, FaVideo, FaHistory, FaShoppingBag, FaMusic, FaThumbsUp, FaFire, FaFilm, FaNewspaper } from "react-icons/fa";
import { IoTimeSharp } from "react-icons/io5";
import { MdLiveTv, MdSportsEsports, MdSubscriptions } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" hidden md:inline md:col-span-1 md:mt-[-12px] max-w-50">
      <div className="border-b-1 border-gray-400 p-3">
        <Link to="/"><div className="flex items-center py-1 px-6 mb-1 font-semibold rounded-md bg-gray-600 text-white">
          <FaHome className="mr-4" /> Home</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <SiYoutubeshorts className='mr-4' />Shorts</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <MdSubscriptions className='mr-4' />Subscriptions</div>
        </Link>
      </div>
      <div className="border-b-1 border-gray-400 p-3">
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaHistory className='mr-4' />History</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaVideo className='mr-4' />Your videos</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <IoTimeSharp className='mr-4' />Watch later</div>
        </Link>
      </div>
      <div className="border-b-1 border-gray-400 p-3">
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaThumbsUp className='mr-4' />Liked videos</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaShoppingBag className='mr-4' />Shopping</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaMusic className='mr-4' />Music</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaFire className='mr-4' />Trending</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaFilm className='mr-4' />Films</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <MdLiveTv className='mr-4' />Live</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <MdSportsEsports className='mr-4' />Gaming</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <FaNewspaper className='mr-4' />News</div>
        </Link>
        <Link to="/"><div className="flex items-center py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">
          <IoMdTrophy className='mr-4' />Sport</div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar;

