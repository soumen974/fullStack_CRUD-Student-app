import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../Component/Navbar';

export default function UserLayout() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}
