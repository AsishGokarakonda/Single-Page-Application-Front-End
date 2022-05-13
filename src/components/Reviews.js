import React from 'react'
import '../css/ReviewCSS.css'

// this is the reviews component.This will displays the reviews given by people in a row of cards
const Reviews = () => {
    return (
        <>
            {/* this is the header of the reviews component. */}
            <header>
                {/* this will display "Reviews" heading in right side of header  */}
                <div className="d-flex justify-content-between" style={{ marginTop: "135px" }}>
                    <div id='reviews'>
                        <p style={{ display: "inline", borderBottom: "3px solid #0259EB", paddingBottom: "2px" }}>
                            Re
                        </p>
                        views
                    </div>
                    {/* this will display the current page you are seeing/ total page numbers and arrows to navigate between pages  */}
                    <div id='reviews-header-right'>1<span style={{ opacity: "0.5" }}> / 12  </span>
                        <span id="reviews-arrows">
                            <a href="/" style={{ textDecoration: "none", color: "white" }}>&larr; </a>
                            <a href="/" style={{ textDecoration: "none", color: "white" }}>   &rarr;</a>
                        </span>
                    </div>
                </div>
            </header>

            <div className="container overflow-hidden" >
                <div className="row" id='review-row' style={{ paddingTop: "20px" }}>

                    {/* these cards will display reviews in cards  */}

                    <div className="col md-4">
                        <div className="card" style={{ width: "23rem", boxShadow: "8px -8px  #3A7DA8" }}>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item" style={{ backgroundColor: "#111229", color: "white" }}>
                                    <div class="d-flex flex-row bd-highlight mb-3">
                                        <div class="p-2 bd-highlight"><img className='reviewImages' src="review1.png" alt="" /></div>
                                        <div class="reviewer-details">
                                            <div class="d-flex flex-column bd-highlight">
                                                <div class="bd-highlight">Hellen Jummy</div>
                                                <div class="reviewer-country">
                                                    <img className='flagimages' src="flag1.png" alt="" />
                                                    <span> PALO ALTO, CA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{ backgroundColor: "#111229" }}>
                                    <div className='review-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col md-4">
                        <div className="card" style={{ width: "23rem", boxShadow: "8px -8px  #3A7DA8" }}>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item" style={{ backgroundColor: "#111229", color: "white" }}>
                                    <div class="d-flex flex-row bd-highlight mb-3">
                                        <div class="p-2 bd-highlight"><img className='reviewImages' src="review1.png" alt="" /></div>
                                        <div class="reviewer-details">
                                            <div class="d-flex flex-column bd-highlight">
                                                <div class="bd-highlight">Isaac Oluwatemilorun</div>
                                                <div class="reviewer-country">
                                                    <img className='flagimages' src="flag2.png" alt="" />
                                                    <span> PALO ALTO, CA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{ backgroundColor: "#111229" }}>
                                    <div className='review-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col md-4">
                        <div className="card" style={{ width: "23rem", boxShadow: "8px -8px  #3A7DA8" }}>
                            <ul className="list-group list-group-flush" >
                                <li className="list-group-item" style={{ backgroundColor: "#111229", color: "white" }}>
                                    <div class="d-flex flex-row bd-highlight mb-3">
                                        <div class="p-2 bd-highlight"><img className='reviewImages' src="review1.png" alt="" /></div>
                                        <div class="reviewer-details">
                                            <div class="d-flex flex-column bd-highlight">
                                                <div class="bd-highlight">Hellen Jummy</div>
                                                <div class="reviewer-country">
                                                    <img className='flagimages' src="flag1.png" alt="" />
                                                    <span> PALO ALTO, CA</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="list-group-item" style={{ backgroundColor: "#111229" }}>
                                    <div className='review-description'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing.
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>


        </>
    )
}

export default Reviews