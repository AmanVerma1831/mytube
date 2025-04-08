import React from 'react'

const Button = ({ name }) => {
  return (
    <button
      className='px-5 py-1 m-1 rounded-lg bg-gray-200 hover:bg-black hover:text-white cursor-pointer'>
      {name}
    </button>
  )
}

export default Button