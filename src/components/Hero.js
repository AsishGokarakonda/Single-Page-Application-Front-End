import React from 'react'
import './Herocss.css'
const Hero = () => {
  return (
    <div className="container">
      {/* <div className="herocontainer" >
        <img className='laderimage' style={{border:"2px solid red"}} id="img1" src="lader.png" alt="" />
        <img className='laderimage' style={{border:"2px solid red"}} id="img2" src="lader.png" alt="" />
        <img className='laderimage' style={{border:"2px solid red"}} id="img3" src="lader.png" alt="" />
        <img className='laderimage' style={{border:"2px solid red"}} id="img4" src="lader.png" alt="" />
        <img src="staricon.png" id='star4' alt="" />
        <img src="staricon.png" id='star3' alt="" />
        <img src="staricon.png" id='star2' alt="" />
        <img src="staricon.png" id='star1' alt="" />
        </div> */}
      <div className="herocontainer">

        <div className="box">
          <img className='laderimage' style={{ border: "2px solid red", position: 'relative' }} src="lader.png" alt="" />
          <img className='laderimage' style={{ border: "2px solid red", position: 'relative' }} src="subtract.png" alt="" />
          <img className='starimages' src="heart.png" id='starnew1' style={{ }} alt="" />
          <div className='zeros' id='zero1'>0</div>
          <div className='labels' id='label1'>Label</div>
        </div>

        <div className="box">
          <img className='laderimage' style={{ border: "2px solid red", position: 'relative'  }} src="lader.png" alt="" />
          <img className='starimages'  src="staricon.png" id='starnew2' style={{ }} alt="" />
          <div className='zeros' id='zero2'>0</div>
          <div className='labels' id='label2'>Label</div>
        </div>

        <div className="box">
          <img className='laderimage' style={{ border: "2px solid red", position: 'relative'  }} src="lader.png" alt="" />
          <img className='starimages' src="staricon.png" id='starnew3' style={{ }} alt="" />
          <div className='zeros' id='zero3'>0</div>
          <div className='labels' id='label3'>Label</div>
        </div>

        <div className="box">
          <img className='laderimage' style={{ border: "2px solid red", position: 'relative'  }} src="lader.png" alt="" />
          <img className='starimages' src="staricon.png" id="starnew4" style={{ }} alt="" />
          <div className='zeros' id='zero4'>0</div>
          <div className='labels' id='label4'>Label</div>
        </div>

      </div>

    </div>
  )
}

export default Hero