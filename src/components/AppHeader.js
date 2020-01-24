import React from 'react';
import {Route, NavLink} from "react-router-dom";
import Login from "../components/Login"
import Signup from "../components/Signup"

const AppHeader = () => {

return(
	<div id="login">
		<h3><NavLink to="/login">Log In</NavLink> Or <NavLink to="/signup">Sign Up</NavLink></h3>
        <div id="content">
          <Route path="/login"  component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
	</div>
  )
}

export default AppHeader;