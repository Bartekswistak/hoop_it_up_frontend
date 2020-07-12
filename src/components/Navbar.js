import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from "react-router-dom";
import Logout from './Logout.js'
import MapContainer from '../containers/MapContainer.js'
import PlayerCardContainer from '../containers/PlayerCardContainer.js'

import CourtMap from './CourtMap.js'

 const NavBar = ({currentUser}) => {

  const handleClick = () => {
    document.getElementById("map").style.display="none";
  }
// debugger
    return (
      <div className="NavBar">
        <h3 className="navlink">Welcome {currentUser.username}</h3>
          <div id="navi">

         <Link to={`/myplayercard`} onClick={handleClick}> My Player Card</Link><span>    </span>
          <Link to={"/courts"}>Find Courts</Link>
          </div>
          <Route path={`/myplayercard/`} component={PlayerCardContainer}/> 
          {/* <Route path={`/courts`} component={CourtMap} /> */}
          <Route path={`/courts`} component={MapContainer} />

          
          {!!currentUser ? <Logout/> : null}
       </div>
    )
}

const mapStateToProps = (state) => {
    return ({
      currentUser: state.currentUserReducer,
      playercard: state.myPlayerCardReducer
    })
  }
  
export default connect(mapStateToProps)(NavBar)