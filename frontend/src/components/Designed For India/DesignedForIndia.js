import React, { Component } from "react";
import img1 from './img/DF1.mov'

export default class DesignedForIndia extends Component {

    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{ margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1>Designed For India</h1>
                            <h6 style={{paddingBottom: '20px'}}>By: Cumar Yusuf - October 8<sup>th</sup>, 2018</h6>
                            <p>Designed For India was a website I had worked on for a client on Upwork as a freelancer.
                            </p>
                            <p>The website used Node JS and Express JS as the backend. The frontend used basic HTML, CSS and Javascript. 
                                The website include a bunch of animations which were done using CSS animations and include gifs. It also
                                included a horizontal scroll through feature. 
                            </p>
                            <p>Overall, I loved working the this website as it was my first time displaying animations and moving objects 
                                on a website.
                            </p>
                        </div>
                    </div>
                    <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '50px'}}>
                        <video width="50%" controls autoplay loop muted>
                                <source src={img1} type="video/mp4"/>
                                <source src={img1} type="video/ogg"/>
                                Your browser does not support HTML5 video.
                        </video>
                    </div>
                </div>
            </section>
          );
    }
  }