import React from 'react'
import {connect} from 'react-redux'
import PlayerCardForm from '../components/PlayerCardForm'

const PlayerCard = (props) => {
     
let playercard = props.currentUser.playercard

if (playercard == null) {
    return <PlayerCardForm/>;
}
    return(
        <div className="playercard">
            <h3>Nickname on the Court: {playercard.player_nickname}</h3>
          
            Height: {playercard.player_height_in_feet} feet {playercard.player_height_in_inches} inches
            <br></br>
            Weight: {playercard.player_weight} lbs
            <br></br>
            Age: {playercard.player_age}
            <br></br>
            Favorite Player: {playercard.player_fav_player}
          
        </div> 
        )        
    }

export default connect(null) (PlayerCard)