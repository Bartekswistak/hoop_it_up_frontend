// import React from 'react';
// import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
// import useOnclickOutside from 'react-cool-onclickoutside';

// const PlacesAutocomplete = (input) => {
//   const {
//     ready,
//     value,
//     suggestions: { status, data },
//     setValue,
//     clearSuggestions
//   } = usePlacesAutocomplete({
//     requestOptions: { input },
//     debounce: 300
//   });
//   const registerRef = useOnclickOutside(() => {
//     // When user clicks outside of the component, we can dismiss
//     // the searched suggestions by calling this method
//     clearSuggestions();
//   });

//   const handleInput = e => {
//     // Update the keyword of the input element
//     setValue(e.target.value);
//   };

//   const handleSelect = ({ description }) => () => {
//     // When user selects a place, we can replace the keyword without request data from API
//     // by setting the second parameter as "false"
//     setValue(description, false);
//     clearSuggestions();

//     // Get latitude and longitude via utility functions
//     getGeocode({ address: description })
//       .then(results => getLatLng(results[0]))
//       .then(({ lat, lng }) => {
//         // this.map.panTo({lat, lng})
//         console.log('📍 Coordinates: ', { lat, lng });
//       })
//       }
  

//   const renderSuggestions = () =>
//     data.map(suggestion => {
//       const {
//         id,
//         structured_formatting: { main_text, secondary_text }
//       } = suggestion;

//       return (
//         <div
//           key={id}
//           onClick={handleSelect(suggestion)}
//         >
//           {main_text} {secondary_text}
//         </div>
//       );
//     });

//   return (
//     <div ref={registerRef}>
//       <input
//         value={value}
//         onChange={handleInput}
//         disabled={!ready}
//         placeholder="Search"
//       />
//       {/* We can use the "status" to decide whether we should display the dropdown or not */}
//       {status === 'OK' && <ul>{renderSuggestions()}</ul>}
//     </div>
//   );
// };

// export default PlacesAutocomplete;