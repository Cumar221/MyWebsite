import React, { Component } from "react";
import img1 from './img/CS1.png'
import img2 from './img/CS2.png'
import img3 from './img/CS3.png'
import img4 from './img/CS4.png'
import img5 from './img/CS5.png'
import img6 from './img/CS6.png'
import img7 from './img/CS7.png'

export default class ChatSystem extends Component {

    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{ margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1>Chat System</h1>
                            <h6 style={{ paddingBottom: '20px'}}>By: Cumar Yusuf - April 27<sup>th</sup>, 2017</h6>
                            <p>My group members
                                <a href="https://www.facebook.com/profile.php?id=100007501908823" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Daniel</a>,
                                <a href="https://www.facebook.com/slavi.paskalev" target="_blank" rel="noopener noreferrer" style= {{color: 'dodgerblue'}}> Slavi</a>,
                                <a href="https://www.facebook.com/shahab.seyedi.5" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> Shahab</a>,
                                <a href="https://www.facebook.com/SummerDubbz" target="_blank" rel="noopener noreferrer" style={{ color: 'dodgerblue'}}> Rumen </a>
                                and I worked on a chat messenger like web application
                                for our software engineer web based system class. You can find our project on
                                <a href="https://github.com/Cumar221/SENG513_Project" target="_blank" rel="noopener noreferrer" style={{color: 'dodgerblue'}}> GitHub</a>.</p>
            
                            <p>Our chat system was created using a web framework called Meteor. Meteor provided us with the front
                            end and backend tools. For the front end, we used ReactJS and some npm modules. As for the backend we used
                            MongoDB. Since Meteor was created with NodeJS, we used some dependencies from npm.</p>
            
                            <p>Our chat system had a login feature that allowed users to register and log into the system. Security
                            was not a requirement for this project and we focused on the features. A user was able to chat in
                            a group channel(1 to Many) or private channel(1 to 1). Within a chat, users can send text, emojis, pictures
                            GIF, PDF files, GPS location(just coordinates), and can use a text/code editor to send as pdf. Users
                            were also able to sketch some drawings and send as an image. All data and meta data were stored using MongoDB.
                            The images, GIFs and PDFs were stored using Cloudinary. Cloudinary's api provided a secure url for each file
                            which was stored in MongoDB collections.</p>
            
                            <p>From this project I learned about NodeJS and npm. I learned about ReactJS and MongoDB. I learned
                            about Cloudinary. I basically learned that there are so many libraries, APIs, frameworks, modules
                            and tools that are open sourced that helped us with this project. There is no need to reinvent the wheel
                            when there exists already made solutions that are publicly shared for all.</p>
            
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