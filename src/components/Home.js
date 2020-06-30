import React from 'react'
// import {NavLink} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import UsersContainer from '../containers/UsersContainer'

const Home = () => {

    return ( 
        <Container>
            {/* <NavLink to="/">Home </NavLink> */}
             <div className="userscontainer"> <UsersContainer/> </div>
            
            <div className= "home">
                <h1>Welcome to Hoop it Up</h1>
                <p id="subtitle">Finding quality pickup games in your area since 2019</p>             
            </div>
        </Container>
    )
}

export default Home