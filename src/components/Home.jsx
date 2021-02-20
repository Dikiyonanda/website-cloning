import React from 'react'
import Cards from './Cards/Index'
import HeroSection from './Header/Index'
import List from './List'
import Navbar from './Navbar/Navbar'

 const Home = () => {
    return (
        <div>
            <Navbar />
            <Cards />
            <List />
            <HeroSection />
        </div>
    )
}

export default Home;