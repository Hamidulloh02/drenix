import React from 'react'
import ServiseHeader from '../../../Components/ServiseHeader'
import ServesInformation from '../../../Components/ServesInformation'
import Serveslogo from '../../../Components/Serveslogo'
import Contact02 from '../../../Components/Contact02'
import Slider from "./BrandingSlider"

// jsons
import Header from "./BrandingHeader.json"
import Informator from "./BrandingInformator.json"

function ServesBranding() {
  return (
    <div>
        <ServiseHeader data={Header}/>
        <ServesInformation data={Informator}/>
        <Slider/>
        <Serveslogo/>
        <Contact02/>
    </div>
  )
}

export default ServesBranding