import React, { useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import { Outlet, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { closeMenu, openMenu } from '../redux/appSlice';

const Body = () => {

  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    location.pathname === '/' ? dispatch(openMenu()) : dispatch(closeMenu())
  }, [location.pathname, dispatch])

  return (
    <>
      <Header />
      <div className='md:grid grid-flow-col'>
        <Sidebar />
        <Outlet />
      </div>
    </>
  )
}

export default Body;