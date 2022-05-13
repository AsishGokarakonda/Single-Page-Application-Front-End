import React from 'react'
import '../css/ReviewCSS.css'
import ReviewCard from './ReviewCard'

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
                <div className="row" style={{ paddingTop: "20px" }}>
                    
                    {/* these review cards will display reviews in cards  */}

                    <ReviewCard name="Hellen Jummy" city=" PALO ALTO, CA" flag="flag1.png" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing." />
                    <ReviewCard name="Isaac Oluwatemilorun" city=" PALO ALTO, CA" flag="flag2.png" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing." />
                    <ReviewCard name="Hellen Jummy" city=" PALO ALTO, CA" flag="flag1.png" message="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing." />

                </div>
            </div>


        </>
    )
}

export default Reviews