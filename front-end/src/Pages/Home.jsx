import React from 'react'
import FirstSlider from '../Components/FirstSlider'
import "./Home.modules.css"
import Subject from '../Components/Subject'
import QandA from '../Components/QandA'
import ContactUs from '../Components/ContactUs'
import MainContactUs from "../Components/MainContactUs"

const Home = () => {
  return (
    <div className='HomeMainDiv'>
      <FirstSlider/>
      <Subject/>
      <QandA/>
      <ContactUs/>
      {/* <MainContactUs /> */}
    </div>
  )
}

export default Home