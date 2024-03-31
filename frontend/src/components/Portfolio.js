import React, { Component } from "react";
import Select from 'react-select'
import { Row, Col, Image, Container} from 'react-bootstrap';
import Ease from './Ease/img/Ease9.jpg';
import AC from './Alarm Clock/img/AC1.png';
import CS from './Chat System/img/CS1.png';
import DFI from './Designed For India/img/gif2.gif';
import EB from './Early Berd/img/logo.png';
import EZ from './EZ Clean/img/EZ1.jpg';
import PW from './Personal Website/img/PW1.png';
import PK from './Project Koffee/img/PK12.jpg';
import SS from './Space Swerve/img/SS1.png';
import SH from './SalaamaHut/img/SH1.png';
import { Link } from 'react-router-dom';


export default class Portfolio extends Component {

    render() {
        console.log(this.props.color);
        var backgroundColor = ""
        var color  = ""
        if (this.props.color === "dark"){
            color = "white"
            backgroundColor = "#202124";
        }else{
            color = "#202124";
            backgroundColor = "white";
        }
          
        return (
            <section>
                <Container style={{ position: 'relative', paddingBottom: '50px', height: '100%' }}>
                    <h1 style={{ paddingBottom: "20px" }}>Projects</h1>
                    
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/ease'} >
                                <Image src={Ease} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Ease</div>
                            </Link>
                        </Col>

                        <Col xs={12} md={4}>
                            <Link to={'/projectKoffee'} >
                                <Image src={PK} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Project Koffee</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/chatSystem'} >
                                <Image src={CS} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Chat System</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/ezClean'} >
                                <Image src={EZ} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>EZ Clean</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/alarmClock'} >
                                <Image src={AC} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}} >Alarm Clock</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/spaceSwerve'} >
                                <Image src={SS} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Space Swerve</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/designedForIndia'} >
                                <Image src={DFI} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Designed For India</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/personalWebsite'} >
                                <Image src={PW} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Personal Website</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/earlyBerd'} >
                                <Image src={EB} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>Early Berd</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/salaamahut'} >
                                <Image src={SH} thumbnail />
                                <div className='portfolio' style = {{color: color, backgroundColor: backgroundColor}}>SalaamaHut</div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}