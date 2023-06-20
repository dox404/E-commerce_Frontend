import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import Carousel from '../../Components/Carousel/carousel'
import Cards from '../../Components/Card/Cards'

const Home = () => {
  return (
    <>
      <Navbar />

      <div className='home'>
        <div className='home-contents'>

          <Carousel />
          <Cards />
        </div>
      </div>
    </>
  )
}

export default Home
