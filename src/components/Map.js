import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import mapStyles from "./mapStyles";


const mapContainerStyle = {
  map: {
    top: "435px",
    position: "absolute",
    height: "45%", 
    width: "70%",
    left: "15%"
  }
};

const options = {
  styles: mapStyles,
  zoomControl: true,
};

export class CurrentLocation extends React.Component {

    constructor(props) {
        super(props);
    
        const { lat, lng } = this.props.initialCenter;
        this.state = {
          currentLocation: {
            lat: lat,
            lng: lng
          }
        };
      }

      componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
        if (prevState.currentLocation !== this.state.currentLocation) {
          this.recenterMap();
        }
      }

      
 recenterMap() {
    const map = this.map;
    const current = this.state.currentLocation;

    const google = this.props.google;
    const maps = google.maps;

    if (map) {
      let center = new maps.LatLng(current.lat, current.lng);
      map.panTo(center);
    }
  }

  componentDidMount() {
    if (this.props.centerAroundCurrentLocation) {
      if (navigator && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(pos => {
          const coords = pos.coords;
          this.setState({
            currentLocation: {
              lat: coords.latitude,
              lng: coords.longitude
            }
          });
        });
      }
    }
    this.loadMap();
  }

  loadMap() {
    if (this.props && this.props.google) {
      // checks if google is available
      const { google } = this.props;
      const maps = google.maps;

      const mapRef = this.refs.map;

      // reference to the actual DOM element
      const node = ReactDOM.findDOMNode(mapRef);

      let { zoom } = this.props;
      const { lat, lng } = this.state.currentLocation;
      const center = new maps.LatLng(lat, lng);
      const mapConfig = Object.assign(
        {},
        {
          center: center,
          zoom: zoom,
          options: options
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);

      // This is the nearbySearch function to display all the markers

      const request = {
        location: center,
        radius: '50000',
        name: ['basketball court']
      }

      const service = new google.maps.places.PlacesService(this.map);

      service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);  
          }
        }
      });
    } 
    const createMarker= (place) => {
      let marker = new this.props.google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        title: place.name
      });

      let infowindow = new this.props.google.maps.InfoWindow({
        content:{
          name: place.name,
          vicinity: place.vicinity
        }
        
   });  

      marker.addListener("click", function() {
      
        console.log(infowindow)
        infowindow.setContent(`<div id="infowindow">` + place.name + `<br>` + place.vicinity + `</div>`)
        infowindow.open(this.map, marker)
            
      })
        
      }
    }
    
  
 renderChildren() {
    const { children } = this.props;
    if (!children) return;

    return React.Children.map(children, c => {
      if (!c) return;
      return React.cloneElement(c, {
        map: this.map,
        google: this.props.google,
        mapCenter: this.state.currentLocation,
      });
      
    });
  }

  render() {
    const style = Object.assign({}, mapContainerStyle.map);
   return (  
     <div>
       <div style={style} ref="map">
         Loading map...
       </div>
       {this.renderChildren()}
     </div>
   );
 }


}
export default CurrentLocation;

CurrentLocation.defaultProps = {
  zoom: 10,
  initialCenter: {
    lat: 27.097643,
    lng: -82.442617
  },
  centerAroundCurrentLocation: false,
  visible: true
};
