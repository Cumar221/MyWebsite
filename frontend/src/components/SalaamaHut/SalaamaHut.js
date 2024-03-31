import React, { Component } from "react";
import vid from "./img/SH2.mov";

export default class SalaamaHut extends Component {
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
              <h1>SalaamaHut</h1>
              <h6 style={{ paddingBottom: "20px" }}>
                By: Cumar Yusuf - January 10<sup>th</sup>, 2019
              </h6>
              <p>
                <a
                  href="https://www.salaamahut.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "dodgerblue" }}
                >
                  {" "}
                  SalaamaHut
                </a>
                , is a local East African and Somali Cusine Restaurant that I
                had the opportunity to work with and assist the company with
                their business website.
              </p>
              <p>
                The website simply uses WordPress as the front and backend. The
                domain address and website host was all done using Godaddy.
              </p>
            </div>
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
      </section>
    );
  }
}
