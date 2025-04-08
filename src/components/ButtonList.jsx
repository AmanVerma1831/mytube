import React from 'react'
import Button from './Button';

const ButtonList = () => {

  const namesOfButtons = [
    "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking",
    "Swiggy", "Circus", "Water", "English", "Bangalore", "Sky"
  ];

  return (
    <div className=''>
      <button
        className='px-5 py-1 m-1 rounded-lg bg-black text-white cursor-pointer'>
        All
      </button>
      {namesOfButtons.map((Bname, i) => <Button name={Bname} key={i} />)}
    </div>
  )
}

export default ButtonList;