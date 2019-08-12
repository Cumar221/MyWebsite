import React, { Component } from "react";
import img1 from './img/PK1.jpg'
import img2 from './img/PK2.jpg'
import img3 from './img/PK3.jpg'
import img4 from './img/PK4.jpg'
import img5 from './img/PK5.jpg'
import img6 from './img/PK6.jpg'
import img7 from './img/PK7.jpg'
import img10 from './img/PK10.jpg'
import img11 from './img/PK11.jpg'
import img12 from './img/PK12.jpg'



export default class ProjectKoffee extends Component {
    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1>Project Koffee</h1>
                            <h6 style={{paddingBottom: '20px'}}>By: Cumar Yusuf - April 27<sup>th</sup>, 2017</h6>
                            <p>Project Koffee was a project my group members
                                <a href="https://www.facebook.com/roman.sklyar.35" target="_blank" rel="noopener noreferrer" style={{ color: 'dodgerblue'}}> Roman</a>,
                                <a href="https://www.facebook.com/luckysharms9" target="_blank" rel="noopener noreferrer" style={{ color: 'dodgerblue'}}> Sajjan</a>,
                                <a href="https://www.facebook.com/mlawniczak2501" target="_blank" rel="noopener noreferrer" style= {{ color: 'dodgerblue'}}> Matt</a>,
                                <a href="https://www.facebook.com/xboxwee" target="_blank" rel="noopener noreferrer" style={{ color: 'dodgerblue'}}> Anthony </a>
                                and I worked on at
                                The University of Calgary CSUS Hakathon event. Our project is posted
                                <a href="https://devpost.com/software/project-koffee" target="_blank" rel="noopener noreferrer" style={{ color: 'dodgerblue'}}> here</a>. </p>
            
                            <p>The Hakathon was focused on creating something that fell under automation and optimization.
                            Our group chose to do a WiFi enabled smart coffee machine that can be used with a mobile app.
                            Our project was half hardware and half application based. One of our group members brought
                            in an old coffee machine we could hack. We interfaced the coffee machine with one of our Raspberry Pi
                            micro-controller. We wrote a couple of lines of python script to trigger the power button when
                            the script was ran. We made our Pi run on an Apache Server and connected the Pi to a local hotspot network
                            so that one can turn on the coffee machine through an http request. We then started to develop a mobile
                            app using the cross platform Xamarin. We used a switch button that would fire up an http request to the Pi to
                            run our script. We had intended to create a schedule feature to schedule the time and day a user
                            would wish to start their coffee but we ran out of time.</p>
            
                            <p>The overall experience was superb. It was my first ever Hakathon event. We saw a lot of
                                cool projects and got to meet other students and sponsors. Our project did not win but we came in 5
                                <sup>th</sup> place which not bad. I would see myself doing more of these events and getting involved
                            in our tech community.</p>
                        </div>
                    </div>
                    <div id="photos" className="col-lg-6 col-sm-6" style={{margin: '0 auto', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '50px'}}>
                        <img src={img1} alt=''></img>
                        <img src={img7} alt=''></img>
                        <img src={img3} alt=''></img>
                        <img src={img12} alt=''></img>
                        <img src={img4} alt=''></img>
                        <img src={img6} alt='' ></img>
                        <img src={img5} alt=''></img>
                        <img src={img10} alt=''></img>
                        <img src={img11} alt=''></img>
                        <img src={img2} alt=''></img>


                    </div>
                    
                </div>
            </section>
        
          );
    }
  }