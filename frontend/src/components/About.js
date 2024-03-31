import React, { Component } from "react";

export default class About extends Component {
  render() {
    return (
      <section
        id="portfolio"
        className="no-padding"
        style={{
          position: "relative",
          paddingTop: "50px",
          paddingBottom: "100%",
        }}
      >
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
              <h1 id="homeHeading" style={{ marginBottom: "20px" }}>
                ABOUT ME
              </h1>
              <p>
                {" "}
                Hello there, nice to meet you and welcome to my website. My name
                is Cumar Yusuf and I currently reside in Toronto. I'm a Computer
                Science undergraduate with a bachelor's degree from The
                University of Calgary. I'm interested in the development of all
                kinds of applications and software.
              </p>
              <p>
                {" "}
                Throughout my journey in tech, I've developed mobile
                applications on iOS, Android and Windows. I've developed desktop
                applications in C# and Java. I've developed many web
                applications including this one. I've built tangible firmware
                devices using raspberry pi and arduino microcontrollers, input
                and output sensors and code. I'm currently and constantly
                learning to develop more cool stuff. I'm currently learning more
                about building tangible computerized devices that we humans can
                interact with. I started to research on augmented and virtual
                reality. I see myself building something in AR/VR very soon. I
                also would like to get into AI and machine learning and
                introduce it into an app or some kind of tangible wearable
                devices.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
