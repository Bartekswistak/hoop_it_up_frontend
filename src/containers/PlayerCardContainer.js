import React from 'react'
import {connect} from 'react-redux'
import PlayerCard from '../components/PlayerCard'
import PlayerCardForm from '../components/PlayerCardForm'
import NewPlayerCard from '../components/NewPlayerCard'
// import { fetchPlayercard } from '../actions/myPlayerCard'


  class PlayerCardContainer extends React.Component {

    render(){
      let playercard = this.props.currentUser.playercard //already created playercard
      let newcard = this.props.playercard.playercard  //newly submitted playercard
    // debugger
      if (!!playercard) {
        return( <PlayerCard/>)  //if the user has a card
      } 

      if (!!newcard) {
        return (<NewPlayerCard/>) //if a new card was submitted
      }

      return (<PlayerCardForm currentUser = {this.props.currentUser}/>) //if neither above then render form
    }
  }

const mapStateToProps = state => {
    return ({
      playercard: state.myPlayerCardReducer,
      currentUser: state.currentUserReducer
    })
  }


export default connect(mapStateToProps)(PlayerCardContainer)

// onClick={fetchPlayercard(currentUser.id)}