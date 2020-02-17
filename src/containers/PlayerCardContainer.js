import React from 'react'
import {connect} from 'react-redux'
import PlayerCard from '../components/PlayerCard';
import PlayerCardForm from '../components/PlayerCardForm';

const PlayerCardContainer = ({currentUser}) => {

  let playercard = currentUser.playercard

   
  return (  
    <h1>{currentUser.username}'s Player Card </h1>  
    )

    if (!!playercard) {
      return <PlayerCard currentUser = {this.props.currentUser} />
    } else {
      return <PlayerCardForm/>
    }
}


const mapStateToProps = (state) => {
    return ({
      currentUser: state.currentUser
    })
  }
  


export default connect(mapStateToProps, PlayerCard)(PlayerCardContainer);