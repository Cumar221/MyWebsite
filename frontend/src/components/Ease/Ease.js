import React, { Component } from "react";
import img1 from './img/Ease1.jpg'
import img2 from './img/Ease2.jpg'
import img3 from './img/Ease3.jpg'
import img4 from './img/Ease4.jpg'
import img5 from './img/Ease5.jpg'
import img6 from './img/Ease6.jpg'
import img7 from './img/Ease7.jpg'
import img8 from './img/Ease8.jpg'
import img9 from './img/Ease9.jpg'
import img10 from './img/Ease10.jpg'

export default class Ease extends Component {

    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px'}}>
                            <h1>Ease</h1>
                            <h6 style={{paddingbBottom: '20px'}}>By: Cumar Yusuf - April 27<sup>th</sup>, 2017</h6>
                            <p>Ease was a project my group members&nbsp; 
                                <a href="https://www.facebook.com/roman.sklyar.35" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}>Roman</a>,&nbsp;
                                <a href="https://www.facebook.com/luckysharms9" target="_blank"  rel="noopener noreferrer" style={{color: 'dodgerblue'}}>Sajjan</a>,&nbsp;
                                <a href="https://www.facebook.com/jsmanak" target="_blank"  rel="noopener noreferrer" style={{color: 'dodgerblue'}}>Jessie</a>&nbsp;
                                and I worked on in our advanced iOS class. Ease is a health
                                navigator app that allows patients to monitor their health condition(s) overtime. The app
                                is available on&nbsp;
                                <a href="https://itunes.apple.com/us/app/prostaid/id1199106855?mt=8" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}>iTunes</a>&nbsp;
                                and if you want more info on Ease you can find it&nbsp;
                                <a href="https://pages.cpsc.ucalgary.ca/~sharmask/" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}>here</a> and&nbsp;
                                <a href="https://exdee.ai/" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}>here</a>.
                                Our class was also featured&nbsp;
                                <a href="http://ucalgary.ca/utoday/issue/2017-04-28/computer-science-students-get-creative-developing-ios-apps" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}>here</a>.
                            </p>
                            <p> We helped our client Exdee with their Ease app by developing their UI designs,
                                some data visualization, data analytics and other features. The overall experience
                                was to learn about iOS development with the Swift programming language, build a network
                                with the clients we were assigned to work with and to teach each other about iOS development.
                            </p>
                            <p> I personally loved the experiences I had working on this project with my group members. I learned how
                                to use coca pods, played with app delegates, created extensions, learned about firebase analytics and
                                brushed up on my knowledge with auto layout. I was able witness how a startup functioned, planned and
                                executed to reach their goals. From this experience it kind of showed me that anyone can open a startup
                                business as long as they have the idea, the vision, knows the right people and does not give up without a fight.
                            </p>
                            <p> I'm glad I had the opportunity to learn about iOS development and I can see myself pursuing this career path either
                                with my own company or with another.
                            </p>
                        </div>
                    </div>
                    <div id="photos" className="col-lg-6 col-sm-6" style={{margin: '0 auto', paddingTop: '10px', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '50px'}}>
                        <img src={img1} alt=''></img>
                        <img src={img2} alt=''></img>
                        <img src={img3} alt=''></img>
                        <img src={img4} alt=''></img>
                        <img src={img5} alt=''></img>
                        <img src={img6} alt=''></img>
                        <img src={img7} alt=''></img>
                        <img src={img8} alt=''></img>
                        <img src={img9} alt=''></img>
                        <img src={img10} alt=''></img>
                    </div>
                </div>
            </section>

          );
    }
  }