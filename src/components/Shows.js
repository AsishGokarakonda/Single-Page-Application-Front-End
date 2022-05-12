import React from 'react'
import BadgeMaker from './BadgeMaker'
import './ShowsCSS.css'
const Show = () => {
  return (
    <>
      <div style={{ backgroundColor: "#0A0B1A", color: "white" }}>
        <div className="container" id='wholecontainer' style={{ height: "900px", border: "2px solid red", paddingTop: "65px" }}>
          <header>
            <div className="d-flex justify-content-between">
              <div id='upcomingshows'><p style={{ display: "inline", borderBottom: "3px solid #0259EB", paddingBottom: "2px" }}>Up</p>coming shows</div>
              <div id='viewall' style={{ color: "#E5C558", }}>View all</div>
            </div>
          </header>




          <div className="container overflow-hidden" style={{ marginTop: "40px" }}>
            <div className="row">

              <div className="col md-3">
                <div className="card" style={{ width: "18rem"}}>
                  <img src="img1.png" className="card-img-top" alt="..." />
                  <ul className="list-group list-group-flush" >
                    <li className="list-group-item" style={{backgroundColor:"#111229" }}><BadgeMaker name={"Folk"}/></li>
                    <li className="list-group-item"  style={{backgroundColor:"#111229" }}>
                      <div className="personName">
                        Benny Dayal
                        </div></li>
                  </ul>
                  <div className="card-body">
                  <a href="/" className="card-link">More Info</a>
                    <a href="/" className="card-link">Another link</a>
                  </div>
                </div>
              </div>

              <div className="col md-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="img2.png" className="card-img-top" alt="..." />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><BadgeMaker name={"Bollywood"}/></li>
                    <li className="list-group-item">
                      <div className="personName">
                        Vijay Yesudas
                      </div>
                    </li>
                   
                  </ul>
                  <div className="card-body">
                    <a href="/" className="card-link">More Info</a>
                    <a href="/" className="card-link">Another link</a>
                  </div>
                </div>
              </div>

              <div className="col md-3">

                <div className="card" style={{ width: "18rem" }}>
                  <img src="img3.png" className="card-img-top" alt="..." />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><BadgeMaker name={"Folk"}/></li>
                    <li className="list-group-item">
                      <div className="personName">
                        Andrea Jeremiah
                      </div>
                    </li>
                   
                  </ul>
                  <div className="card-body">
                  <a href="/" className="card-link">More Info</a>
                    <a href="/" className="card-link">Another link</a>
                  </div>

                </div>
              </div>

              <div className="col md-3">
                <div className="card" style={{ width: "18rem" }}>
                  <img src="img4.png" className="card-img-top" alt="..." />
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item"><BadgeMaker name={"Folk"}/></li>
                    <li className="list-group-item">
                      <div className="personName">
                        Shilpa Rao
                      </div>
                    </li>
                   
                  </ul>
                  <div className="card-body">
                  <a href="/" className="card-link" style={{textDecoration:"none"}}>More Info</a>
                    <a href="/" className="card-link">Another link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>

  )
}

export default Show