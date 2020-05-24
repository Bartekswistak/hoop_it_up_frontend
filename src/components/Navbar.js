import React from 'react'
import {connect} from 'react-redux'
import {Route, Link} from "react-router-dom";
import Logout from './Logout.js'
import PlayerCardContainer from '../containers/PlayerCardContainer.js'

 const NavBar = ({currentUser}) => {

  let id = currentUser.id

    return (
      <div className="NavBar">
        <h3 className="navlink">Welcome {currentUser.username}</h3>


         <Link to={`/playercard/${id}`}> My Player Card </Link>
         <Link to="/courts"> Find Courts</Link>

          {/* both seem to work fine here  */}

            <Route path={`/playercard/${id}`}  render={(currentUser) => <PlayerCardContainer {...currentUser}/>} />
            {/* <Route path={`/playercard/${id}`}  component = {PlayerCardContainer}/> */}

            {!!currentUser ? <Logout/> : null}
       </div>
    )
}

const mapStateToProps = (state) => {
    return ({
      currentUser: state.currentUserReducer
    })
  }
  
export default connect(mapStateToProps)(NavBar)