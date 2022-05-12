import React from 'react'

const BadgeMaker = (props) => {
  return (
    <div style={{backgroundColor:" rgb(229, 197, 88)",
        display: "inline-block",
        paddingTop: "3px",
        paddingBottom: "3px",
        paddingRight: "10px",
        paddingLeft: "10px",
        borderRadius: "3px",
        color:"#682F26"}}>{props.name}</div>
  )
}

export default BadgeMaker