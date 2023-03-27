import React from 'react'
import './Navbar.js'
import Navbar from './Navbar.js'
import Banner from '../images/banner.jpg'
import Footer from './Footer'


const Home = () => {
  return (
    
    <div className='home-container'>
      
      <div className='banner-container'>
        <img src={Banner} alt='' className='banner-image' />
        <div className='nav'>
          <Navbar />
        </div>
        <div className='quotes'>
          <p className='main-quote'>Beautifully designed, furnished private rooms and apartments with flexible leases.</p>
          <p className='second-quote'>Co-living in New York City. You've come to the right place.</p>
        </div>
        <div className='lease-container'>
          <p className='sign-a-lease'>Sign a lease for five or more months and save up to 10% on monthly rent.</p>
        </div>
      </div>
      
      <div className='Footer'>
        <Footer />
      </div>
      
    </div>
    
  )
}

export default Home
