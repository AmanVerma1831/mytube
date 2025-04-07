import React from 'react'
import Button from './Button';

const ButtonList = () => {

  const namesOfButtons = [
    "All", "Music", "Mixes", "Game Shows", "Live", "Train", "India", "Cooking",
    "Swiggy", "Circus", "Water", "English", "Bangalore", "Sky"
  ];

  return (
    <div className=''>
      {namesOfButtons.map((Bname, i) => <Button name={Bname} key={i} />)}
    </div>
  )
}

export default ButtonList;