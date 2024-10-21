import React from 'react'
import Hero from '../components/MainPage/Hero'
import Companies from '../components/MainPage/Companies'
import Services from '../components/MainPage/Services'
import Footer from '../components/MainPage/Footer'

const Main_page: React.FC = () => {
  return (
    <div className='w-full h-full bg-gradient-bg'>
      <Hero/>
      <Companies/>
      <Services/>
      <Footer/>
    </div>
  )
}

export default Main_page