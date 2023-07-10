import React,{useState,useEffect} from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"
import { Outlet } from "react-router-dom";
import Contact02 from "./Components/Contact02";


function App() {
  const [animated,setanimated] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setanimated(true)
    },2000)
  })
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

return (
  <>
  <div className="App">
    {
      (animated == true)?
      <div>
          <Navbar id="#top_btn"/>
          <Outlet/>
          <Footer/>
      </div>
       :
      <div className="main_animation_rotade">
      <div class="rotating-dashed">
        <span class="dashing"><i></i></span>
        <span class="dashing"><i></i></span>
        <span class="dashing"><i></i></span>
        <span class="dashing"><i></i></span>
        <strong><img src="./izeaImg/drenx-top-logo02.png"/></strong>
      </div>
      </div>
    }
  </div>    
  {/* <div style={{className:"snowanimation" }}>
      <Snowfall />
    </div>, */}
    {/* <a href="top_btn">
    <div className="top_icon_btn">
    <AiOutlineUp />
    </div>
    </a> */}
  </>

);
}

export default App;
