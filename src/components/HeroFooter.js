import React from 'react'
import EachCircle from './EachCircle'
import '../css/HeroCSS.css'

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
        <EachCircle/>
        <EachCircle/>
        <EachCircle/>
      </div>

    </div>
  )
}

export default Hero