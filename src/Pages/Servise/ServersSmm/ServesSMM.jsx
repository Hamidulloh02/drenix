import React from 'react'
import ServesInformation from '../../../Components/ServesInformation'
import SMMSlider from "./SmmSlider"
import ServiseHeader from '../../../Components/ServiseHeader'
import Serveslogo from '../../../Components/Serveslogo'

// import jesons
import Header from "./SmmHeader.json"
// import Information from "../ServersWeb/WebInformation.json"
import Information from "./SmmInformator.json"
import Contact02 from '../../../Components/Contact02'

function ServesSMM() {
  return (
    <div>
      <ServiseHeader data={Header}/>
      <ServesInformation data={Information}/>
      < SMMSlider/>
      <Serveslogo/>
      <Contact02/>
    </div>
  )
}

export default ServesSMM