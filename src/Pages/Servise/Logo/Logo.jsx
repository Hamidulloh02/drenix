import React from 'react'
import ServiseHeader from '../../../Components/ServiseHeader'



// jsons
import Header from "./LogoHeader.json"
import Informator from "./LInformator"
import Contact02 from '../../../Components/Contact02'

function Logo() {
  return (
    <div>
        <ServiseHeader data={Header}/>
        <Informator/>
        <Contact02/>
    </div>
  )
}

export default Logo