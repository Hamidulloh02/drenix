import React from 'react'
import ServiseHeader from '../../../Components/ServiseHeader'
import ServesInformation from '../../../Components/ServesInformation'
import Servesslider from '../../../Components/Servesslider'
import Serveslogo from '../../../Components/Serveslogo'
import Contact02 from '../../../Components/Contact02'

// jsons
import Header from "./ExtraHeader.json"
import Informator from "./ExtraInformator.json"

function Extra() {
  return (
    <div>
        <ServiseHeader data={Header}/>
        <ServesInformation data={Informator}/>
        <Servesslider/>
        <Serveslogo/>
        <Contact02/>
    </div>
  )
}

export default Extra