import React from 'react'
import {connect} from 'react-redux'
import {getMyPlayerCard} from '../actions/myPlayerCard.js'

// Need a way to check if there is a current user and if the user has a playercard..... current_user.playercard??
// Need to check if logged in, then check if playercard exists with getMyPlayercard...then either render the playercard or the form.
// Each user can only have one playercard..



const PlayerCard = (props) => {
     
let playercard = props.currentUser.playercard


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



export default connect(null, {getMyPlayerCard}) (PlayerCard)