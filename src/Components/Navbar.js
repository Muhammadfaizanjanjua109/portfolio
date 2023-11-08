'use client'
import React, { useEffect, useState } from 'react'

import Image from 'next/image'
// import logo from '../assets/Images/logo.png'
import Link from 'next/link'
function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition >= window.innerHeight) {
        // Scrolled past the first 100vh
        setIsScrolled(true);
      } else {
        // Scrolled back below 100vh
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div>
      
  {/* <!-- ======= Header ======= --> */}
  <header
      id="header"
      className={`fixed-top ${isScrolled ? 'scrolled' : ''}`}
      style={{ backgroundColor: isScrolled ? 'black' : 'transparent' }}
    >    <div className="container d-flex align-items-center justify-content-between">

      <h1 className="logo"><a href="index.html">WebStorm </a></h1>
      {/* <!-- Uncomment below if you prefer to use an image logo --> */}
   {/* <a href="index.html" className="logo">
    <Image src={logo} alt="" className="img-fluid" /></a> */}

      <nav id="navbar" className="navbar">
        <ul>
          <li><a className="nav-link scrollto " href="#hero">Home</a></li>
          <li><a className="nav-link scrollto" href="#about">About</a></li>
          <li><a className="nav-link scrollto" href="#services">Services</a></li>
          <li><a className="nav-link scrollto " href="#work">Work</a></li>
          {/* <li><a className="nav-link scrollto " href="#blog">Blog</a></li> */}
        
          {/* <li><a className="nav-link scrollto" href="#contact">Contact</a></li> */}
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>
      {/* <!-- .navbar --> */}

    </div>
  </header>
  {/* <!-- End Header --> */}
    </div>
  )
}

export default Navbar
