import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const PageWrapper = () => {
  return (
    <>
      <NavLink to="/" >Home</NavLink>
      <NavLink to="/superheros" >Superheros</NavLink>
    </>
  )
}

export default PageWrapper