import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className=" hidden md:inline md:col-span-1 md:mt-[-12px] md:max-w-52">
      <div className="border-b-1 border-gray-400 p-3">
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md bg-gray-600 text-white">Home</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shorts</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Popular</div></Link>
      </div>
      <div className="border-b-1 border-gray-400 p-3">
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Your channel</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">History</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Watch later</div></Link>
      </div>
      <div className="border-b-1 border-gray-400 p-3">
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Trending</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shopping</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Music</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Trending</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shopping</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Music</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Trending</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shopping</div></Link>
        <Link to="/"><div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Music</div></Link>
      </div>
    </div>
  )
}

export default Sidebar