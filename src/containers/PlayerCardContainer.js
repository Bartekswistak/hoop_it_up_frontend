import React from 'react'
import {connect} from 'react-redux'
import PlayerCard from '../components/PlayerCard'
import PlayerCardForm from '../components/PlayerCardForm'
import NewPlayerCard from '../components/NewPlayerCard'

  class PlayerCardContainer extends React.Component {

    render(){

      let playercard = this.props.currentUser.playercard //already created playercard
      let newcard = this.props.playercard.playercard //newly submitted/edited playercard
        
      // debugger
      if (!playercard && !newcard){
        return (<PlayerCardForm currentUser = {this.props.currentUser}/>) //if neither above then render form
      }

      if (!!newcard){
        var newCardId = this.props.playercard.playercard.id
        if (newcard.id === newCardId){
          return (<NewPlayerCard/>) //if a new card was submitted
        } 
      }

      if (!!playercard){
        var userCardId = this.props.currentUser.playercard.id
        if (playercard.id === userCardId){
          return( <PlayerCard/>)  //if the user has a card
        }
      } 
    }
  }



const mapStateToProps = state => {
    return ({
      playercard: state.myPlayerCardReducer,
      currentUser: state.currentUserReducer
    })
  }

export default connect(mapStateToProps)(PlayerCardContainer)
