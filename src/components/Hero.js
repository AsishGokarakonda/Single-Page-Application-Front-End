import React from 'react'
import './Herocss.css'
const Hero = () => {
  return (
    <div className="container">

      <div className="herocontainer">
        <div className="box">
          <img className='starimages' src="heart.png" style={{filter:"brightness(1)" }} alt="" />
          <img src="subtract.png"  alt="" className='subtractimg' />
          <div className='zeros' >0</div>
          <div className='labels'>Label</div>
        </div>

        <div className="box">
          <img className='starimages'  src="staricon.png"  style={{ }} alt="" />
          <div className='zeros'>0</div>
          <div className='labels'>Label</div>
        </div>

        <div className="box">
          <img className='starimages' src="staricon.png" style={{ }} alt="" />
          <div className='zeros'>0</div>
          <div className='labels'>Label</div>
        </div>

        <div className="box">
          <img className='starimages' src="staricon.png" style={{ }} alt="" />
          <div className='zeros'>0</div>
          <div className='labels'>Label</div>
        </div>

      </div>

    </div>
  )
}

export default Hero