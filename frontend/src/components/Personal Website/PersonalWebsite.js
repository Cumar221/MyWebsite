import React, { Component } from "react";
import img1 from "./img/PW3.gif";

export default class PersonalWebsite extends Component {
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
              <h1>Personal Website</h1>
              <h6 style={{ paddingBottom: "20px" }}>
                By: Cumar Yusuf - August 1<sup>st</sup>, 2019
              </h6>
              <p>
                {" "}
                My personal website was done to showcase my skills and
                expreiences as a web developer.
              </p>
              <p>
                {" "}
                This website uses Node JS as the backend and React JS for
                the frontend. The domain was purchased from GoDaddy
                and is hosted on Google Firebase.
              </p>
              <p>
                {" "}
                Overall, loved working on this website and will keep
                showcasing my awesome projects here.
              </p>
            </div>
          </div>
          <div
            style={{
              margin: "0 auto",
              textAlign: "center",
              paddingTop: "10px",
              paddingBottom: "50px",
            }}
          >
            <img src={img1} alt=""></img>
          </div>
        </div>
      </section>
    );
  }
}
