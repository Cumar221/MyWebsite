import React, { Component } from "react";
import img from '../img/0.jpeg';
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Row, Col, Image} from 'react-bootstrap';

export default class Home extends Component {

    render() {
        return (  
            <Container style={{paddingTop: '50px',paddingBottom: '100%', textAlign: 'center'}}>
            <Row>
              <Col>
                <Image src={img} roundedCircle />
              </Col>
            </Row>
            <Row style={{justifyContent: 'center', paddingTop: '20px'}}>
                <h2>Cumar Yusuf</h2>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <FontAwesomeIcon style={{paddingRight: '5px'}} icon={faGraduationCap}  color="#df342f" size="lg"/>
                <h6>B.Sc. Computer Science</h6>
            </Row>
            <Row style={{justifyContent: 'center', paddingTop: '20px'}}>
                <Col xs={10} md={8}>
                    <h5>Love to code, create beautiful UI, build and develop products.<br/>
                        Passionate about User Experience, thoughtful design, performance and optimized driven algorithms
                        and good coding practices.
                    </h5>
                </Col> 
            </Row>
          </Container>
          );
    }
  }