import React from 'react'
import EachCircle from './EachCircle'
import '../css/HeroCSS.css'

// This component displays all the circles in a row. 
const Hero = () => {
  return (
    <div className="circleElements">
      <div className="allCircles">
        <div className="box">
          <img className='starimages' src="heart.png" style={{filter:"brightness(1)" }} alt="" />
          <img src="subtract.png"  alt="" className='subtractimg' />
          <div className='zeros' >0</div>
          <div className='labels'>Label</div>
        </div>
        {/* This EachCircle component displays the circle and contents in it. */}
        <EachCircle/>
        <EachCircle/>
        <EachCircle/>
      </div>

    </div>
  )
}

export default Hero