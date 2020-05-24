import React from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import PlayerCard from '../components/PlayerCard'
import PlayerCardForm from '../components/PlayerCardForm'

const PlayerCardContainer = ({currentUser}) => {

  let playercard = currentUser.playercard

  if (playercard == null) {
      return <PlayerCardForm currentUser = {currentUser}/>;
  }
    return (
        <PlayerCard currentUser = {currentUser}/>
  )
}


const mapStateToProps = state => {
     return ({
      currentUser: state.currentUserReducer
    })
  }

export default connect(mapStateToProps)(PlayerCardContainer)