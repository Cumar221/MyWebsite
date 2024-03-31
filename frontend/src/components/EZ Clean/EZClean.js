import React, { Component } from "react";
import img1 from "./img/EZ1.jpg";
import img2 from "./img/EZ2.jpg";
import img3 from "./img/EZ3.jpg";
import img4 from "./img/EZ4.jpg";
import img5 from "./img/EZ5.pdf";
import img6 from "./img/EZ6.mp4";
import img7 from "./img/EZ7.jpg";
import img8 from "./img/EZ8.jpg";

export default class EZClean extends Component {
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
              <h1>EZ Clean</h1>
              <h6 style={{ paddingBottom: "20px" }}>
                By: Cumar Yusuf - April 27<sup>th</sup>, 2017
              </h6>
              <p>
                EZ Clean was a project my group members
                <a
                  href="https://www.facebook.com/abigail.oliver.568"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "dodgerblue" }}
                >
                  {" "}
                  Abigail
                </a>
                ,
                <a
                  href="https://www.facebook.com/GodWaffle"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "dodgerblue" }}
                >
                  {" "}
                  Sumeeet{" "}
                </a>
                and I worked on for our Physical and Tangible HCI class. You can
                read about our project
                <a
                  href={img5}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "dodgerblue" }}
                >
                  {" "}
                  here.
                </a>
              </p>

              <p>
                Our project was designed for the Laneway Housing Project which
                basically provides a portable safe living space for seniors. We
                had to make some device that would help seniors with their day
                to day living. We've built a device for seniors who suffered
                from osteoarthritis mainly from their upper body shoulder area.
                We've built a cleaning device that was portable and extendable.
                With the device our user group would be able to clean their
                kitchen cabinets and counter top with ease.{" "}
              </p>

              <p>
                Our prototype used a Raspberry Pi micro-controller, an external
                power supply, a DC motor, a servo motor, a small joystick and
                some wiring. We created a python script that triggered the
                motors to move when the joystick was moved. If the user moved
                the joystick left or right the servo motor would move the arm
                left or right respectively. If the user vertically pressed the
                joystick the DC motor located on the tip of the arm would rotate
                360 the sponge attached to it.{" "}
              </p>

              <p>
                I learned a lot from this class and actually enjoyed it. There
                were assignments we did in class that introduced us to tangible
                devices. I created an instrument using two force touch sensors
                and a photoresistor. The instrument would play two types of
                pitched tunes if it's dark or bright. Each force touch sensor
                played three tunes depending on how hard you pressed on it and
                an extra tune was played if you pressed both sensors. For our
                data visualization assignment I build a speedometer that had a
                gas and break using force touch sensors. The indicator was
                controlled by a servo motor. So one would press the gas which
                would increase the indicator to a higher value. The harder you
                pressed the force touch, the faster it would reach the end and
                vice versa. The break force touch brought the indicator back
                down to zero. Once I had everything working a added a network
                speed test feature that picked up the download and upload speed
                on the network and presented the results using the speedometer
                indicator.
              </p>
            </div>
          </div>
          <div
            id="photos"
            className="col-lg-6 col-sm-6"
            style={{
              margin: "0 auto",
              paddingTop: "10px",
              paddingLeft: "10px",
              paddingRight: "10px",
            }}
          >
            <img src={img1} alt=""></img>
            <img src={img2} alt=""></img>
            <img src={img3} alt=""></img>
            <img src={img4} alt=""></img>
            <img src={img7} alt=""></img>
            <img src={img8} alt=""></img>
          </div>
          <div style={{ textAlign: "center", paddingBottom: "50px" }}>
            <video width="auto" controls autoPlay loop muted>
              <source src={img6} type="video/mp4" />
              <source src={img6} type="video/ogg" />
              Your browser does not support HTML5 video.
            </video>
          </div>
        </div>
      </section>
    );
  }
}
