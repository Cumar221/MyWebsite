import React, { Component } from "react";
import resume from '../img/resume.pdf'
import firebase from '../firebase'

firebase.analytics().logEvent('notification_received');

export default class Resume extends Component {

    render() {
        return (
           <div style={{height: '100%', width: '100%', position: 'absolute'}}>
                <iframe src="https://docs.google.com/gview?url=https://drive.google.com/uc?id=1lkg9DTuV7ICFBjDc13GaNmkuWsPtzt10&embedded=true" style={{width:'100%', height:'1200px'}} frameborder="0"></iframe>
           </div>
          );
    }
  }