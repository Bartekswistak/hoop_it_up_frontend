import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import CurrentLocation from '../components/Map';

export class MapContainer extends Component {
  
  render() {
    return (
      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      >
      </CurrentLocation>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQ18PBDlXpg8MzVY-tDe1IK2KMdd3X-IM',
  libraries: ['places']
})(MapContainer);