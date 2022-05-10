import React from 'react'
import './Herocss.css'
const Hero = () => {
  return (
      <div className="container">
    <div className="herocontainer" >
        <img className='laderimage' style={{border:"2px solid red"}} id="img1" src="lader.png" alt="" />
        <img className='laderimage' style={{border:"2px solid red"}} id="img2" src="lader.png" alt="" />
        <img className='laderimage' style={{border:"2px solid red"}} id="img3" src="lader.png" alt="" />
        <img className='laderimage' style={{border:"2px solid red"}} id="img4" src="lader.png" alt="" />
        <img src="staricon.png" id='star4' alt="" />
        <img src="staricon.png" id='star3' alt="" />
        <img src="staricon.png" id='star2' alt="" />
        <img src="staricon.png" id='star1' alt="" />
        </div>
    </div>
  )
}

export default Hero