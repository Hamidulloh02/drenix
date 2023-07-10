import React from 'react'
import Carusel from "../Components/Carusel/Carusel";
import Contact from "../Components/Contact";
import Dedicate from "../Components/Dedicate";
import Experience from "../Components/Experience";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Partners from "../Components/Partners";
import Videopage from "../Components/Videopage";
import WeDo from "../Components/WeDo";
import Contact02 from '../Components/Contact02';
// import json
import Datajson from "../Components/Carusel/caeus1.json"
import Datajson2 from "../Components/Carusel/carus2.json"




function HomePage() {
  console.log(Datajson)
  return (
    <div>
    <Header/>
    <Videopage/>
    <Experience/>
    <Partners/>
    <Carusel data={Datajson}/>
    <Dedicate/>
    <Carusel data={Datajson2}/>
    <WeDo/>
    <Contact/>
    {/* <Contact02/> */}
    </div>
  )
}

export default HomePage