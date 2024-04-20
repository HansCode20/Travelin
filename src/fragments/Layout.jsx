import React from 'react'
import Navbar from '../Navigate/Navbar'
import Footer from '../Navigate/Footer'

const Layout = ({ children }) => {
  return (
    <div>
        <Navbar/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout