// import React, { Component } from 'react';
// import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
// import CurrentLocation from '../components/Map';

// export class MapContainer extends Component {
//   state = {
//     showingInfoWindow: false,
//     activeMarker: {},
//     selectedPlace: {}
//   };

//   onMarkerClick = (props, marker, e) =>
//     this.setState({
//       selectedPlace: props,
//       activeMarker: marker,
//       showingInfoWindow: true
//     });

//   onClose = props => {
//     if (this.state.showingInfoWindow) {
//       this.setState({
//         showingInfoWindow: false,
//         activeMarker: null
//       });
//     }
//   };

//   fetchPlaces(mapProps, map) {
//     const {google} = mapProps;
//     const service = new google.maps.places.PlacesService(map);
    
//     const venice = new window.google.maps.LatLng(27.097643, -82.442617);

//     const request = {
//                 location: venice,
//                 radius: '50000',
//                 name: ['basketball court']
//               }
//     // var request = {
//     //     query: 'basketball court',
//     //     fields: ['name', 'geometry'],
//     //   };

//     service.nearbySearch(request, function(results, status) {
//         if (status === google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             this.createMarker(results[i]);
//           }

//         //   map.setCenter(results[0].geometry.location);
//         }
//       });
//     }

//     createMarker=(place)=> {
//         let marker = new this.props.google.maps.Marker({
//           map: this.map,
//           position: place.geometry.location
//         });
        
//         this.props.google.maps.event.addListener(marker, 'click', function() {
//             this.infowindow.setContent(place.name);
//             this.infowindow.open(this.map, this);
//           });
//         }
    

//   render() {
//     return (
//       <CurrentLocation
//         centerAroundCurrentLocation
//         google={this.props.google}
//         onReady={this.fetchPlaces}
//       >
//         <Marker onClick={this.onMarkerClick} name={'current location'}/>
//         <InfoWindow
//           marker={this.state.activeMarker}
//           visible={this.state.showingInfoWindow}
//           onClose={this.onClose}
//         >
//           <div>
//             <h4>{this.state.selectedPlace.name}</h4>
//           </div>
//         </InfoWindow>
//       </CurrentLocation>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: 'AIzaSyBQ18PBDlXpg8MzVY-tDe1IK2KMdd3X-IM',
//   libraries: ['places']
// })(MapContainer);