import React from 'react'
import Reviews from './Reviews'
import Shows from './Shows'
import '../css/ShowsCSS.css'

// This is the body that comes after the title image and circles
const Body = () => {
  return (
    <>
      <div style={{ backgroundColor: "#0A0B1A", color: "white" }}>
        <div className="container" id='wholecontainer' style={{paddingBottom: "80px",paddingTop: "65px" }}>
          {/* Shows component displays the show cards  */}
          <Shows/> 
          {/* review component displays the reviews given by people */}
          <Reviews/>
        </div>
      </div>
    </>

  )
}

export default Body