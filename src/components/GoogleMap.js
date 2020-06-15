import React from 'react'
// import ReactDOM from 'react-dom'

export class GoogleMap extends React.Component {

  constructor(){
    super()
    let my_map = document.getElementById("map")
        my_map.style.display = "block";
// debugger
        // 

    }
  
render(){
  return(
    <div id="mapcontainer"></div>
    )
  }
  
}
// ReactDOM.render(my_map, document.getElementById("map"))

export default (GoogleMap);