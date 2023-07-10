import React from 'react'
import ServesInformation from '../../../Components/ServesInformation'
import Servesslider from '../../../Components/Servesslider'
import ServiseHeader from '../../../Components/ServiseHeader'
import Serveslogo from '../../../Components/Serveslogo'
import Contact02 from '../../../Components/Contact02'
// import Slider01 from "../../../Components/Carusel/SliderOne/Slider"

// import jesons
import Header from "./WebHeader.json"
import Information from "./WebInformation.json"

function ServesWeb() {
  return (
    <div>
      <ServiseHeader data={Header}/>
      <ServesInformation data={Information}/>
      <Servesslider/>
      <Serveslogo/>
      <Contact02/>
    </div>
  )
}

export default ServesWeb