import React from 'react';
import ReactDOM from 'react-dom';
import { InfoWindow, Marker } from 'google-maps-react';
import mapStyles from "./mapStyles";
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';



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
          options: options,
        }
      );

      // maps.Map() is constructor that instantiates the map
      this.map = new maps.Map(node, mapConfig);
      // This is the nearbySearch function to display all the markers
      this.searchCourts()
       
      //this does the searchCourts() function and map dragend by clicking the button.
            maps.event.addListener(this.map, "dragend", function() {
              var button = document.querySelector("#root > div > header > div.NavBar > div:nth-child(3) > div:nth-child(1) > div > button.findcourts")
              button.click()
            })
      }
    }

   searchCourts = () => {
      const map = this.props.google.maps.Map
      const { google } = this.props;
      const maps = google.maps;

      const request = {
        location: this.map.getCenter(),
        radius: '50000',
        name: ['basketball court']
      }

    const service = new google.maps.places.PlacesService(this.map);

  // ACTUAL SEARCH FOR COURTS
      service.nearbySearch(request, function(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);  
          }
        }
      });

      // MARKERS TO BE DROPPED 
    const createMarker= (place) => {
      let marker = new this.props.google.maps.Marker({
        map: this.map,
        position: place.geometry.location,
        title: place.name
      });

      let infowindow = new this.props.google.maps.InfoWindow({
        name: place.name,
        vicinity: place.vicinity
      });  

      marker.addListener("click", function() {

        let contentString = `<div id="infowindow">` + place.name + `<br>` + place.vicinity + `</div> `
      
        infowindow.setContent(contentString)
        infowindow.open(this.map, marker)          
      })       
      }

    }

    Locate = () => {
      return (
        <button 
          className="locate"
          onClick={() => {
            navigator.geolocation.getCurrentPosition(
              (position) => {
                this.map.panTo({
                  lat: position.coords.latitude,
                  lng: position.coords.longitude,
                });
              },
              () => null
            );
          }}
        > Back to my Location
        </button>
      );
    }

    FindCourts = () => {     
      return (
        <button 
          className="findcourts"
          onClick={() => {
            this.searchCourts()
          }}
        >Find Courts
        </button>
      );
    }

    PlacesAutocomplete = () => {
      const map = this.props.google.maps.Map

      const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
      } = usePlacesAutocomplete({
        requestOptions: {  },
        debounce: 300
      });
      const registerRef = useOnclickOutside(() => {
        // When user clicks outside of the component, we can dismiss
        // the searched suggestions by calling this method
        clearSuggestions();
      });
    
      const handleInput = e => {
        // Update the keyword of the input element
        setValue(e.target.value);
      };
    
      const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"
        setValue(description, false);
        clearSuggestions();
    
        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
          .then(results => getLatLng(results[0]))
          .then(({ lat, lng }) => {
            this.map.panTo({lat, lng})
            this.searchCourts()
            console.log('📍 Coordinates: ', { lat, lng });
          })
          }
      
      const renderSuggestions = () =>
        data.map(suggestion => {
          const {
            id,
            structured_formatting: { main_text, secondary_text }
          } = suggestion;
    
          return (
            <div
              className="suggestions"
              key={id}
              onClick={handleSelect(suggestion)}
            >
              - {main_text} {secondary_text} -
            </div>
          );
        });
    
      return (
        <div ref={registerRef}>
          <input
            id="placesearch"
            value={value}
            onChange={handleInput}
            disabled={!ready}
            placeholder="Search for courts around the world"
          />
          {/* We can use the "status" to decide whether we should display the dropdown or not */}
          {status === 'OK' && <ul>{renderSuggestions()}</ul>}
        </div>
      );
    };
    
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
           <this.PlacesAutocomplete/>
       <div 
       style={style} 
       ref="map"
       >
         Loading map...
       </div> 
        {this.renderChildren()}
        {this.Locate()}
        {this.FindCourts()}
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
