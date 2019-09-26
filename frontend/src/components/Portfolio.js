import React, { Component } from "react";
import { Row, Col, Image, Container } from 'react-bootstrap';
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
        return (
            <section>
                <Container style={{ position: 'relative', paddingBottom: '50px', height: '100%' }}>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/ease'} >
                                <Image src={Ease} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Ease</div>
                            </Link>
                        </Col>

                        <Col xs={12} md={4}>
                            <Link to={'/projectKoffee'} >
                                <Image src={PK} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black'}}>Project Koffee</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/chatSystem'} >
                                <Image src={CS} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Chat System</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/ezClean'} >
                                <Image src={EZ} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>EZ Clean</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/alarmClock'} >
                                <Image src={AC} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Alarm Clock</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/spaceSwerve'} >
                                <Image src={SS} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Space Swerve</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/designedForIndia'} >
                                <Image src={DFI} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Designed For India</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/personalWebsite'} >
                                <Image src={PW} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Personal Website</div>
                            </Link>
                        </Col>
                        <Col xs={12} md={4}>
                            <Link to={'/earlyBerd'} >
                                <Image src={EB} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>Early Berd</div>
                            </Link>
                        </Col>
                    </Row>
                    <Row style={{ marginBottom: '30px' }}>
                        <Col xs={12} md={4}>
                            <Link to={'/salaamahut'} >
                                <Image src={SH} thumbnail />
                                <div style={{ position: 'relative', marginTop: '-10px', textAlign: 'center', background: 'white', color: 'black' }}>SalaamaHut</div>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}