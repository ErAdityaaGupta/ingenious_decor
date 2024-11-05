import React from 'react'
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <div>
        Navbar
      </div>
      <Outlet></Outlet>
      <div>
        Footer
      </div>
    </>
  )
}
