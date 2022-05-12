import React from 'react'
import Reviews from './Reviews'
import Shows from './Shows'
import '../css/ShowsCSS.css'

const Show = () => {
  return (
    <>
      <div style={{ backgroundColor: "#0A0B1A", color: "white" }}>
        <div className="container" id='wholecontainer' style={{paddingBottom: "80px",paddingTop: "65px" }}>
          <Shows/>
          <Reviews/>
        </div>
      </div>
    </>

  )
}

export default Show