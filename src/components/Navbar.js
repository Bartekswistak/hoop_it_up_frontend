import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from "react-router-dom";
import Logout from './Logout.js'
import PlayerCardContainer from '../containers/PlayerCardContainer.js'
import GoogleMap from './GoogleMap.js'

 const NavBar = ({currentUser}) => {
// debugger
    return (
      <div className="NavBar">
        <h3 className="navlink">Welcome {currentUser.username}</h3>
      

         <Link to={`/myplayercard`}> My Player Card</Link>
            //  <Link to={"/courts"}>Find Courts</Link>

          <Route path={`/myplayercard/`}   component={PlayerCardContainer}/> 
          <Route path={`/courts`}   component={GoogleMap} />

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