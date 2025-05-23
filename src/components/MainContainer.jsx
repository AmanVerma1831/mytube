import React from 'react'
import ButtonList from './ButtonList'
import VideoContainer from './VideoContainer'

const MainContainer = () => {
  return (
    <div className='col-span-11 md:ml-10'>
      <ButtonList />
      <VideoContainer />
    </div>
  )
}

export default MainContainer