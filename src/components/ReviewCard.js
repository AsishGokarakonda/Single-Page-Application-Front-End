import React from 'react'
import '../css/ReviewCSS.css'

// This ReviewCard component will take name,city,country Image,review of reviewer and display it as card 
const ReviewCard = (props) => {
    return (
        <>
            <div className="col md-4">
                <div className="card" style={{ width: "23rem", boxShadow: "8px -8px  #3A7DA8" }}>
                    <ul className="list-group list-group-flush" >
                        <li className="list-group-item" style={{ backgroundColor: "#111229", color: "white" }}>
                            <div class="d-flex flex-row bd-highlight mb-3">
                                <div class="p-2 bd-highlight"><img className='reviewImages' src="review1.png" alt="" /></div>
                                <div class="reviewer-details">
                                    <div class="d-flex flex-column bd-highlight">
                                        <div class="bd-highlight">{props.name}</div>
                                        <div class="reviewer-country">
                                            <img className='flagimages' src={props.flag} alt="" />
                                            <span> {props.city}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="list-group-item" style={{ backgroundColor: "#111229" }}>
                            <div className='review-description'>
                                {props.message}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>

        </>
    )
}

export default ReviewCard