import React from 'react'
import Featured from '../../components/featured/Featured'
import FeaturedPropertise from '../../components/featuredPropertise/FeaturedPropertise'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import MailList from '../../components/mailList/MailList'
import Navbar from '../../components/navbar/Navbar'
import PropertyList from '../../components/property/PropertyList'
import './home.css';
const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <div className="container mt-5" style={{zIndex:1}}>
        <Featured />
        <h1 className='section-title'>Browse by property type</h1>
        <PropertyList />
        <h1 className='section-title'>Homes guests love</h1>
        <FeaturedPropertise />
      </div>
      <MailList />
      <Footer />
    </div>
  )
}

export default Home