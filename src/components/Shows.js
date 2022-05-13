import React from 'react'
import BadgeMaker from './BadgeMaker'
const Shows = () => {
  return (
    <>
      <header>
        <div className="d-flex justify-content-between">
          <div id='upcomingshows'>
            <p style={{ display: "inline", borderBottom: "3px solid #0259EB", paddingBottom: "2px" }}>Up</p>
            coming shows
          </div>
          <a href='/' id='viewall'>
            View all
          </a>
        </div>
      </header>


      <div className="container overflow-hidden" >
        <div className="row" style={{ paddingTop: "20px" }}>
          <div className="col md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="img1.png" className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush" >
                <li className="list-group-item">
                  <BadgeMaker name={"Folk"} />
                </li>
                <li className="list-group-item">
                  <div className="personName">
                    Benny Dayal
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link" style={{ textDecoration: "none" }}>More Info &rarr;</a>
                <a href="/" className="card-link">
                  <img className='ticketicon' src="pinkicon.png" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className="col md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="img2.png" className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <BadgeMaker name={"Bollywood"} />
                </li>
                <li className="list-group-item">
                  <div className="personName">
                    Vijay Yesudas
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link" style={{ textDecoration: "none" }}>More Info &rarr;</a>
                <a href="/" className="card-link"><img className='ticketicon' src="pinkicon.png" alt="" /></a>
              </div>
            </div>
          </div>

          <div className="col md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="img3.png" className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <BadgeMaker name={"Folk"} />
                </li>
                <li className="list-group-item">
                  <div className="personName">
                    Andrea Jeremiah
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link" style={{ textDecoration: "none" }}>More Info &rarr;</a>
                <a href="/" className="card-link"><img className='ticketicon' src="pinkicon.png" alt="" /></a>
              </div>

            </div>
          </div>

          <div className="col md-3">
            <div className="card" style={{ width: "18rem" }}>
              <img src="img4.png" className="card-img-top" alt="..." />
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <BadgeMaker name={"Folk"} />
                </li>
                <li className="list-group-item">
                  <div className="personName">
                    Shilpa Rao
                  </div>
                </li>
              </ul>
              <div className="card-body">
                <a href="/" className="card-link" style={{ textDecoration: "none" }}>More Info &rarr;</a>
                <a href="/" className="card-link"><img className='ticketicon' src="pinkicon.png" alt="" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Shows