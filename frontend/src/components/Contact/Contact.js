import React, { Component } from "react";
import './style.css';
import Map from './MapContainer';
import Recaptcha from 'react-recaptcha';
import { Alert } from 'react-bootstrap';

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVerified: false,
            error: false,
            messageSent: false
        };
    }

    verifyCallback = (res) => {
        if (res) {
            this.setState({ isVerified: true });
        }
    }

    recaptchaLoaded = () => {
        //console.log('captcha successfuly loaded!')
    }

    handleSubscribe = (e, s) => {
        e.preventDefault();
        if (this.state.isVerified) {
            this.setState({ error: false, messageSent: true });
            let send = {
                'name': e.target.name.value,
                'email': e.target.email.value,
                'comment': e.target.comment.value
            }

        }
        else {
            this.setState({ error: true });
        }
    }

    render() {
        return (
            <section className="contact">
                <div className="container">
                    <h1 style={{ color: 'black' }}>Contact</h1>
                    <div className="row">
                        <div id="sendDiv" className="col-lg-12 col-md-12 text-center">
                            <Alert show={this.state.messageSent} variant="success">
                                Thank You! We will be in contact shortly.
                            </Alert>
                            <Alert show={this.state.error} variant="danger">
                                Please answer the recaptcha challenge.
                            </Alert>
                            {!this.state.messageSent ?
                                <form method="get" onSubmit={e => this.handleSubscribe(e, this.state)}>
                                    <ul className="errorMessages"></ul>
                                    <label htmlFor="name" style={{ color: 'black' }}>Name:</label>
                                    <input id="name" name="name" type="text" placeholder="Enter Name" required />
                                    <label htmlFor="email" style={{ color: 'black' }}>Email:</label>
                                    <input id="email" name="email" type="email" placeholder="Enter Email" required />
                                    <label htmlFor="comment" style={{ color: 'black' }}>Comment:</label>
                                    <textarea id="comment" name="comment" placeholder="Enter Comment" required style={{ marginTop: '6px', marginBottom: '16px', height: '195px' }}></textarea>
                                    <Recaptcha
                                        sitekey="6LfMWiMUAAAAAJY1rS43iIzv0Y8rxJCvqmYsYUlK"
                                        render="explicit"
                                        verifyCallback={this.verifyCallback}
                                        onloadCallback={this.recaptchaLoaded}
                                    />
                                    <input style={{ margin: '40px 0px' }} type="submit" name="submit" value="Submit" className="page-scroll btn btn-default btn-xl sr-button" />
                                </form>
                                : null
                            }
                        </div>
                    </div>
                </div>
                <Map></Map>
            </section>
        );
    }
}