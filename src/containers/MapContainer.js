import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import CurrentLocation from '../components/Map';


export class MapContainer extends Component {

  
  render() {
    return (
    <div>

      <CurrentLocation
        centerAroundCurrentLocation
        google={this.props.google}
      > 
      </CurrentLocation>
  </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBQ18PBDlXpg8MzVY-tDe1IK2KMdd3X-IM',
  libraries: ['places']
})(MapContainer);