import React, { Component } from "react";
import img2 from './img/SS2.mov'

export default class SpaceSwerve extends Component {
    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{ margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1>Space Swerve</h1>
                            <h6 style={{paddingBottom: '20px'}}>By: Cumar Yusuf - April 27<sup>th</sup>, 2017</h6>
                            <p>Space Swerve was a project my group members
                                <a href="https://www.facebook.com/amir.akhmed" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Amir</a>,
                                <a href="https://www.facebook.com/branko.bajic.33" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Bronko</a>,
                                <a href="https://www.facebook.com/mlawniczak2501" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Matt</a>,
                                <a href="https://www.facebook.com/MuniibRahman" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Munib </a>
                                and I worked on for our iOS beginners class. You can find our project on iTunes soon to come.
                            </p>
                            <p>This class was my first time developing in iOS using Swift. Space Swerve was a 2D
                                game we created for gamers to play. The game was developed for single players to move around a
                                spaceship through space. There were obstacles players had to dodge, players were able to fire
                                bullets and rockets to destroy obstacles in their path. The game had power-ups that would increase
                                their health and munition. The game came with a theme song and sound effects. Players were able to
                                pause a game and resume from where they stopped or return to main menu. Players were also able to turn
                                off the theme song or sound effects either within a game or in the main menu.
                            </p>
                            <p>We used SpriteKit for our game which helped us move our sprites, helped with some physics, and
                                actions for our objects. We've played around with SpriteKit scenes for our wall obstacle we had.
                                We wanted to utilize 3D touch, include Spotify or SoundCloud and integrate facebook to share but we
                                sadly ran out of time to get them done.
                            </p>
                            <p>Overall, I loved this class and what I learned. The curriculum was different in that we the students
                                were teaching each other about iOS development. Each group had to do a topical presentation on one of
                                the videos from WWDC16. We all shared tips and obstacles we faced to help each other. I learned Swift
                                and Xcode for the first time. Once I got used to it the development process was so easy and clean.
                            </p>
                        </div>
                    </div>
                    <div style={{textAlign: 'center', paddingTop: '10px', paddingBottom: '50px'}}>
                        <video width="auto" controls autoplay loop muted>
                                <source src={img2} type="video/mp4"/>
                                <source src={img2} type="video/ogg"/>
                                Your browser does not support HTML5 video.
                        </video>
                    </div>
                </div>
            </section>
        );
    }
}