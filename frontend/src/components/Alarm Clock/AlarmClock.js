import React, { Component } from "react";
import img1 from './img/AC1.png'
import img2 from './img/AC2.png'
import img3 from './img/AC3.png'
import img4 from './img/AC4.png'
import img5 from './img/AC5.png'
import img6 from './img/AC6.png'
import img7 from './img/AC7.png'

export default class AlarmClock extends Component {

    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{ margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1>Alarm Clock</h1>
                            <h6 style={{paddingBottom: '20px'}}>By: Cumar Yusuf - April 27<sup>th</sup>, 2017</h6>
                            <p> My group members
                                <a href="https://www.facebook.com/abigail.oliver.568" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Abigail</a>,
                                <a href="https://www.facebook.com/asianese.brian" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Brian</a>,
                                <a href="https://www.facebook.com/lostingeneral" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Mike</a>,
                                <a href="https://www.facebook.com/nicolasswho" target="_blank"  rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Nicholas</a>,
                                <a href="https://www.facebook.com/sammia.abrar" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Sammia</a>,
                                <a href="https://www.facebook.com/steven.last.54" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Steven </a>
                                and I worked on building and developing
                                an Alarm Clock using the Scrum Methodology for our Software Engineer class. You can find our project
                                on  <a href="https://github.com/steven-ho2/SENG403_Project" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> GitHub</a>.
                            </p>
                            <p> Using the Scrum Methodology we were able assign scrum masters and product owners throughout
                                our sprints. Requirements were given and were placed accordingly on our Trello task board. For every sprint
                                we had user stories, backlogs, starfish diagrams, retrospective summaries and code.
                            </p>
                            <p>For the development process we used Visual Studio's WPF to create a desktop alarm clock. We followed the
                                MVVM pattern and proper documentation. We created all the high priority requirements such as displaying
                                time, setting an alarm, viewing set alarms and etc. We used Prism for event handling and Mahapps for
                                UI design. Our last requirement was to switch platform and create a mobile application of our project.
                                We decided to create a Xamarin cross platform app since we had already spent a lot coding in C# and
                                we wanted to keep using the code base we already had instead of starting from scratch.
                            </p>
                            <p>My experience in this class was pleasant. This class was not about just coding but it was learning
                                to follow software engineering terminologies and practices that are used by big companies. I also
                                learned a lot more about Visual Studio, C# and Xamarin.
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
                    </div>
                </div>
            </section>
        );
    }
}