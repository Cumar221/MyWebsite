import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact/Contact";
import Portfolio from "./Portfolio";
import AlarmClock from "./Alarm Clock/AlarmClock";
import ChatSystem from "./Chat System/ChatSystem";
import DesignedForIndia from "./Designed For India/DesignedForIndia";
import EarlyBerd from "./Early Berd/EarlyBerd";
import Ease from "./Ease/Ease";
import EZClean from "./EZ Clean/EZClean";
import PersonalWebsite from "./Personal Website/PersonalWebsite";
import ProjectKoffee from "./Project Koffee/ProjectKoffee";
import SpaceSwerve from "./Space Swerve/SpaceSwerve";
import Resume from "./Resume";
import SalaamaHut from "./SalaamaHut/SalaamaHut";
import { Navbar, Nav } from "react-bootstrap";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar bg={this.props.color} variant={this.props.color} expand="lg">
          <Navbar.Brand href="/">CY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" style={{ float: "right" }}>
            <Nav className="ml-auto">
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/portfolio">Portfolio</Nav.Link>
              <Nav.Link href="/resume">Resume</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="/portfolio" render={()=> <Portfolio color={this.props.color}/>} />
          <Route path="/alarmClock" component={AlarmClock} />
          <Route path="/chatSystem" component={ChatSystem} />
          <Route path="/designedForIndia" component={DesignedForIndia} />
          <Route path="/ease" component={Ease} />
          <Route path="/ezClean" component={EZClean} />
          <Route path="/personalWebsite" component={PersonalWebsite} />
          <Route path="/spaceSwerve" component={SpaceSwerve} />
          <Route path="/projectKoffee" component={ProjectKoffee} />
          <Route path="/earlyBerd" component={EarlyBerd} />
          <Route path="/resume" component={Resume} />
          <Route path="/salaamahut" component={SalaamaHut} />
        </Switch>
      </Router>
    );
  }
}
