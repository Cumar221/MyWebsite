import React, { Component } from "react";
import { faFacebook, faLinkedin, faInstagram, faSnapchat, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Row, Col, Container } from 'react-bootstrap';

export default class Footer extends Component {
    render() {
        return (
            <Container id='footer' style={{ position: 'fixed', height: '50px', left: '0', right: '0', bottom: '0', width: '100%', backgroundColor: 'white', color: 'black', textAlign: 'center', overflow: '' }}>
                <Row style={{ marginBottom: '30px' }}>
                    <Col xs={12} md={6}>
                        <div style={{ margin: '10px', marginLeft: '10px' }} >Copyright © 2019 Cumar Yusuf</div>
                    </Col>
                    <Col xs={12} md={6}>
                        <a href="https://www.facebook.com/omar.yusuf.3194" target="_blank" rel="noopener noreferrer" title="Facebook">
                            <FontAwesomeIcon style={{ margin: '10px' }} icon={faFacebook} color="#4267b2" size="lg" />
                        </a>
                        <a href="https://www.linkedin.com/in/omar-yusuf-51048b113/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                            <FontAwesomeIcon style={{ margin: '10px' }} icon={faLinkedin} color="#2674b0" size="lg" />
                        </a>
                        <a href="https://www.instagram.com/_omaryusuf/" target="_blank" rel="noopener noreferrer" title="Instagram">
                            <FontAwesomeIcon style={{ margin: '10px' }} icon={faInstagram} color="#b53686" size="lg" />
                        </a>
                        <a href="https://www.snapchat.com/add/omar40123" target="_blank" rel="noopener noreferrer" title="SnapChat">
                            <FontAwesomeIcon style={{ margin: '10px' }} icon={faSnapchat} color="#fef851" size="lg" />
                        </a>
                        <a href="https://twitter.com/cumar41" title="Twitter" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon style={{ margin: '10px' }} icon={faTwitter} color="#38a1f2" size="lg" />
                        </a>
                        <a href="mailto:omar221@windowslive.com" target="_blank" rel="noopener noreferrer" title="Email">
                            <FontAwesomeIcon style={{ margin: '10px' }} icon={faEnvelope} color="#fde9a4" size="lg" />
                        </a>
                        <a href="https://github.com/Cumar221" target="_blank" rel="noopener noreferrer" title="GitHub">
                            <FontAwesomeIcon style={{ margin: '10px', marginRight: '20px' }} icon={faGithub} color="#24292d" size="lg" />
                        </a>
                    </Col>
                </Row>
            </Container>
        );
    }
}