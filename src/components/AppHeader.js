import React from 'react';
import {Route, NavLink} from "react-router-dom";
import Login from "../components/Login"
import Signup from "../components/Signup"

const AppHeader = () => {

return(
	<div id="login">
		<h3 id="welcome"><NavLink to="/login">Login</NavLink> / <NavLink to="/signup">Create Account</NavLink></h3>
        <div id="content">
          <Route path="/login"  component={Login}/>
          <Route path="/signup" component={Signup}/>
        </div>
	</div>
  )
}

export default AppHeader;