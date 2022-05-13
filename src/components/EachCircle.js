import React from 'react'
import '../css/HeroCSS.css'

// this component makes and displays the circles which should be displayed at the end of title image 
const EachCircle = () => {
    return (

        <div className="box">
            <img className='starimages' src="staricon.png" alt="" />
            <div className='zeros'>0</div>
            <div className='labels'>Label</div>
        </div>
    )
}

export default EachCircle