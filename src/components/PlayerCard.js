import React from 'react'
import PlayerCardForm from "./PlayerCardForm.js"
import getMyPlayerCard from '../actions/myPlayerCard.js'

// Need a way to check if there is a current user and if the user has a playercard..... current_user.playercard??
// Need to check if logged in, then check if playercard exists with getMyPlayercard...then either render the playercard or the form.
// Each user can only have one playercard..




const PlayerCard = ({playercard}) => {

    return(
        playercard ? 
        <div className="playerCard">
            <h3>Player Card for: {playercard.attributes.nickname}</h3>
          <ul>
            <li><strong>Player Height:</strong> {playercard.attributes.playerHeightFeet} feet {playercard.attributes.playerHeightInched} inches</li>
            <li><strong>Player Weight:</strong> {playercard.attributes.playerWeight} lbs</li>
            <li><strong>Player Age:</strong> {playercard.attributes.playerAge}</li>
            <li><strong>Favorite Player:</strong> {playercard.attributes.playerFavPlayer}</li>
          </ul>
        </div> 

        : <PlayerCardForm/>
    )
}


export default PlayerCard