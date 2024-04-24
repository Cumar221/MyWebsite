import React, { Component } from "react";
import img from '../img/0.jpeg';
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Container, Row, Col, Image} from 'react-bootstrap';

export default class Home extends Component {

    render() {
        return (  
            <Container style={{paddingTop: '100px', textAlign: 'center'}}>
            <Row>
              <Col>
                <Image src={img} roundedCircle />
              </Col>
            </Row>
            <Row style={{justifyContent: 'center', paddingTop: '20px'}}>
                <h2>Cumar Yusuf</h2>
            </Row>
            <Row style={{justifyContent: 'center'}}>
                <h6><FontAwesomeIcon style={{paddingRight: '5px'}} icon={faGraduationCap}  color="#df342f" size="lg"/>
                BSc Computer Science</h6>
            </Row>
            <Row style={{justifyContent: 'center', paddingTop: '20px'}}>
                <Col xs={10} md={8}>
                    <h5>Love to code, create beautiful user interface, build and develop great products.<br/>
                        Passionate about user experience, thoughtful design, performance <br/> and optimized driven algorithms
                        and good coding practices.
                    </h5>
                </Col> 
            </Row>
          </Container>
          );
    }
  }