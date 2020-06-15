import React from 'react'
// import ReactDOM from 'react-dom'

export class GoogleMap extends React.Component {

  constructor(){
    super()
    let my_map = document.getElementById("map")
        my_map.style.display = "block";
    }
  
render(){
  return(
    <div id="mapcontainer">
      <h3>Here are some basketball courts near you</h3>
      <div>Click on any court to see how many hoopers are there!!</div>
      <div>And make sure to check in if you trying to hoop it up!</div>
    </div>
    )
  }
  
}

export default (GoogleMap);