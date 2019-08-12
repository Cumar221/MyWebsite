import React, { Component } from "react";
import resume from '../img/resume.pdf'

export default class Resume extends Component {

    render() {
        return (
           <div style={{height: '100%', width: '100%', position: 'absolute'}}>
               <iframe title='resume' src={resume} type='application/pdf' width='100%' height='100%'/>
           </div>
          );
    }
  }