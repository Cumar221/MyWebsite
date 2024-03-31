import React, { Component } from "react";
import { Map, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
    

    render() {
        const mapStyles = {
            width: '100%',
            height: '100%',
            marginTop: '100px',
            
        };
        
        return (
            
            <Map
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                gestureHandling= 'cooperative'
                initialCenter={{ lat: 43.654014, lng: -79.383035}}
            />
          );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyCb8F3dQOcY3dTTwp3PsStT1Rs7Nu3rf5I'
  })(MapContainer);