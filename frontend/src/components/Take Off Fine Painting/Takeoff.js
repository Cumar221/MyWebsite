import React, { Component } from "react";
import vid from "./img/TF.mov";


export default class Takeoff extends Component {
  render() {
    return (
      <section id="portfolio" className="no-padding">
        <div className="container-fluid">
          <div className="row no-gutter">
            <div
              className="col-lg-6 col-sm-6"
              style={{
                margin: "0 auto",
                paddingTop: "20px",
                paddingLeft: "10px",
                paddingRight: "10px",
              }}
            >
              <h1>Takeoff Fine Painting</h1>
              <h6 style={{ paddingBottom: "20px" }}>
                By: Cumar Yusuf - January 1<sup>th</sup>, 2023
              </h6>
              <p>
                <a
                  href="https://www.takeofffinepainting.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "dodgerblue" }}
                >
                  {" "}
                  Takeoff Fine Painting Ltd.
                </a>
                {" "} is a local painting company located in Toronto that I
                had the opportunity to work with and assist them with
                their business website.
              </p>
              <p> The website uses HTML, CSS, ExpressJS and is hosted on firebase. </p>
            </div>
            <div
            style={{
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "50px",
            }}
          >
            <video width="50%" controls autoPlay loop muted>
              <source src={vid} type="video/mp4" />
              <source src={vid} type="video/ogg" />
              Your browser does not support HTML5 video.
            </video>
          </div>
          </div>
        </div>
      </section>
    );
  }
}
