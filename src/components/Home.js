import React from 'react'
import Container from 'react-bootstrap/Container';
import UsersContainer from '../containers/UsersContainer'

const Home = () => {

    return ( 
        <Container>
             <div className="userscontainer"> <UsersContainer/> </div>
            
            <div className= "home">
                <h1 id="title">Hoop it up</h1>
                <p id="subtitle">FINDING QUALITY PICK UP GAMES IN YOUR AREA</p>             
            </div>
        </Container>
    )
}

export default Home