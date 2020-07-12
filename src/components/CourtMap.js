// import React from "react";
// import {GoogleMap, useLoadScript, Marker, InfoWindow,} from "@react-google-maps/api";
// import usePlacesAutocomplete, {getGeocode, getLatLng,} from "use-places-autocomplete";
// import {Combobox, ComboboxInput, ComboboxPopover, ComboboxList, ComboboxOption,} from "@reach/combobox";
// import { formatRelative } from "date-fns"; 
// import "@reach/combobox/styles.css";
// import mapStyles from "./mapStyles";


// const libraries = ["places"];
// const mapContainerStyle = {
//     top: "435px",
//     position: "absolute",
//     height: "45%", 
//     width: "70%",
//     left: "15%"
// };
// const options = {
//   styles: mapStyles,
//   zoomControl: true,
// };
// const center = {
//   lat: 27.097643,
//   lng: -82.442617,
// };

// export default function CourtMap() {
//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyBQ18PBDlXpg8MzVY-tDe1IK2KMdd3X-IM',
//     libraries,
//   });
//   const [markers, setMarkers] = React.useState([]);
//   const [selected, setSelected] = React.useState(null);

//   const mapRef = React.useRef();
  
//   const onMapLoad = React.useCallback((map) => {
//     mapRef.current = map;
    
   
//   }, []);

// function FindCourts(props){
//   // debugger
//      let map = new this.props.google.maps
    
//      // debugger
//     let service = new this.props.google.maps.places.PlacesService(map);

//     const request = {
//       // location: venice,
//       radius: '50000',
//       name: ['basketball court']
//     }
 
//     service.nearbySearch(request, function(results, status) {
//         if (status === this.props.google.maps.places.PlacesServiceStatus.OK) {
//           for (var i = 0; i < results.length; i++) {
//             this.createMarker(results[i]);
//           }

//         //   map.setCenter(results[0].geometry.location);
//         }
//       });


    
// // debugger
 

// //     }

//     const createMarker= (place) => {
//         let marker = new this.props.google.maps.Marker({
//           map: this.map,
//           position: place.geometry.location
//         });
        
//         this.props.google.maps.event.addListener(marker, 'click', function() {
//             this.infowindow.setContent(place.name);
//             this.infowindow.open(this.map, this);
//           });
//         }
// }



  
//   const panTo = React.useCallback(({ lat, lng }) => {
//     mapRef.current.panTo({ lat, lng });
//     mapRef.current.setZoom(10);
//   }, []);

//   if (loadError) return "Error";
//   if (!isLoaded) return "Loading...";

//   return (
//     <div>
//       <h1>
//         Basketball Courts{" "}
//       </h1>

//       <Locate panTo={panTo} />
//       <Search panTo={panTo} />
      

//       <GoogleMap
//         id="map"
//         mapContainerStyle={mapContainerStyle}
//         zoom={10}
//         center={center}
//         options={options}
//         // onClick={onMapClick}
//         onLoad={onMapLoad, FindCourts}
//       >
//         {markers.map((marker) => (
//           <Marker
//             key={`${marker.lat}-${marker.lng}`}
//             position={{ lat: marker.lat, lng: marker.lng }}
//             // onClick={() => {
//             //   setSelected(marker);
//             // }}
//           />
//         ))}

//         {selected ? (
//           <InfoWindow
//             position={{ lat: selected.lat, lng: selected.lng }}
//             onCloseClick={() => {
//               setSelected(null);
//             }}
//           >
//             <div>
//               <h2>
//                 This will be court information
//               </h2>
//               <p> {formatRelative(selected.time, new Date())}</p>
//             </div>
//           </InfoWindow>
//         ) : null}
//       </GoogleMap>
//     </div>
//   );
// }

// function Locate({ panTo }) {
//   return (
//     <button 
//       className="locate"
//       onClick={() => {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             panTo({
//               lat: position.coords.latitude,
//               lng: position.coords.longitude,
//             });
//           },
//           () => null
//         );
//       }}
//     > My Location
//     </button>
//   );
// }

// function Search({ panTo }) {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions,
//   } = usePlacesAutocomplete({
//     requestOptions: {
//       location: { lat: () => 43.6532, lng: () => -79.3832 },
//       radius: 100 * 1000,
//     },
//   });

//   const handleInput = (e) => {
//     setValue(e.target.value);
//   };

//   const handleSelect = async (address) => {
//     setValue(address, false);
//     clearSuggestions();

//     try {
//       const results = await getGeocode({ address });
//       const { lat, lng } = await getLatLng(results[0]);
//       panTo({ lat, lng });
//     } catch (error) {
//       console.log("😱 Error: ", error);
//     }
//   };

//   return (
//     <div className="search">
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={handleInput}
//           disabled={!ready}
//           placeholder="Search a location"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ id, description }) => (
//                 <ComboboxOption key={id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     </div>
//   );
// }
