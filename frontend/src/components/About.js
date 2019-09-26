import React, { Component } from "react";

export default class About extends Component {

    render() {
        return (
            <section id="portfolio" className="no-padding" style={{ position: 'relative', paddingTop: '50px', paddingBottom: '50px', height: '100%'}} >
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1 id="homeHeading" style={{marginBottom: '20px'}}>ABOUT ME</h1>
                            <p>	Hey there, nice to meet you and welcome to my website. My name is Cumar Yusuf and I currently reside
                                in Toronto, Ontario, Canada. I'm a Computer Science Under-Graduate with a Bachelor of Science from The
                                University of Calgary. I'm interested in the development of all kinds applications and software.
                                I love to build and develop stuff that fall under Human Computer Interaction.
                            </p>
                            <p>	Thoughout my journey in tech, I've developed mobile apps on iOS, Android and Windows. I've developed Desktop applications
                                in C# and Java. I've developed web applications including this one. I've build tangible firmware devices using a Raspberry Pi, input and output sensors
                                and code. I'm currently teaching myself, as I speak, to develop more cool stuff. I'm currently learning
                                more about building tangible computerized devices that we humans can interact with. I started to research on
                                Augmented and Virtual Reality. I see myself building something in AR/VR very soon. I also would like to get into
                                AI and Machine Learning and introduce it into an app or some kind of tangible wearable device.
                            </p>
                            <p>	On a personal level, I'm a quiet humble chill person who doesn't wine or complain about small stuff.
                                I'm good with people and don't judge anyone by their past or what people say. I come up with my own
                                conclusion and judgement on particularly everything. I like to be around people that mean something to me and can push me
                                to be and do better.
                                
                                I love all types of challenges this world has to offer and it teaches me to be stronger and resilient. I love to
                                travel and see how the world is, to see how people live and interact in their society, to learn from
                                other cultures and grow my own sense of tought.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

          );
    }
  }