import React from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import PlayerCard from '../components/PlayerCard';


const PlayerCardContainer = ({currentUser}) => {

   
  return (
    <Container>
      <h1>{currentUser.attributes.username}'s Player Card </h1>
      <PlayerCard/>
    </Container>
  )
}

const mapStateToProps = ({currentUser}) => {
    return ({
      currentUser
    })
  }
  


export default connect(mapStateToProps)(PlayerCardContainer);