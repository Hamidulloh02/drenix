import React from 'react'
import ServiseHeader from '../../../Components/ServiseHeader'
import VProduction from './VProduction'
import Contact02 from "../../../Components/Contact02"
import Serveslogo from "../../../Components/Serveslogo"


// jsons
import Header from "./VHeader.json"
import Vslider from './Vslider'


function VMain() {
  return (
    <div>
        <ServiseHeader data={Header}/>
        <VProduction/>
        <Vslider/>
        <Serveslogo/>
        <Contact02/>
    </div>
  )
}

export default VMain