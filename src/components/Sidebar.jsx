import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {

  const isMenuOpen = useSelector(store => store.app.isMenuOpen);

  if (!isMenuOpen) return null;

  return (
    <div className="col-span-1 mt-[-12px]">
      <div className="border-b-1 border-gray-400 p-3">
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Home</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shorts</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Popular</div>
      </div>
      <div className="border-b-1 border-gray-400 p-3">
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Your channel</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">History</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Watch later</div>
      </div>
      <div className="border-b-1 border-gray-400 p-3">
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Trending</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shopping</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Music</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Trending</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shopping</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Music</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Trending</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Shopping</div>
        <div className=" py-1 px-6 font-semibold rounded-md hover:bg-gray-600 hover:text-white">Music</div>
      </div>
    </div>
  )
}

export default Sidebar