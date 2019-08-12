import React, { Component } from "react";
import img1 from './img/EB1.mov'


export default class EarlyBerd extends Component {

    render() {
        return (
            <section id="portfolio" className="no-padding">
                <div className="container-fluid">
                    <div className="row no-gutter">
                        <div className="col-lg-6 col-sm-6" style={{ margin: '0 auto', paddingTop: '20px', paddingLeft: '10px', paddingRight: '10px', color: 'black'}}>
                            <h1>Early Berd</h1>
                            <h6 style={{paddingBottom: '20px'}}>By: Cumar Yusuf - January 1<sup>st</sup>, 2019</h6>
                            <p> Early Berd was a website I did for a client on Upwork as a freelancer. The website basically allowed
                                users to search for products and receive notifications about the products while offline. The website found
                                items from eBay that fit the user's search criteria. These criteria would be for instance keywords of products,
                                price ranges and country of origin. 

                            </p>
                            <p> The Easy Berd website used Django/Python as the backend. It included JWT authentication, Django REST framework,
                                Celery(asynchronous task queue), websockets and other features. For the frontend, the website used ReactJS/NodeJS.
                                The frontend also included React Bootstrap, fontaweome, websockets, REST API, and other features.  
                            </p>
                            <p> Overall, this website exceeded my expectations by far. I didn't think Django and NodeJS could work together but
                                sure enough with some tweaks and configurations they can. 
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