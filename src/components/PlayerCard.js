import React from 'react'
import {connect} from 'react-redux'
import {getMyPlayerCard} from '../actions/myPlayerCard.js'

// Need a way to check if there is a current user and if the user has a playercard..... current_user.playercard??
// Need to check if logged in, then check if playercard exists with getMyPlayercard...then either render the playercard or the form.
// Each user can only have one playercard..



const PlayerCard = (playercard) => {
     
    // componentDidMount() {
    //     this.props.getMyPlayerCard()
    // }

    // let playercard = props.currentUser.playercard


    return(
        <div className="playerCard">
            <h3>Nickname: {playercard.playerNickname}</h3>
          <ul>
            <li><strong>Player Height:</strong> {playercard.playerHeightFeet} feet {playercard.playerHeightInched} inches</li>
            <li><strong>Player Weight:</strong> {playercard.playerWeight} lbs</li>
            <li><strong>Player Age:</strong> {playercard.playerAge}</li>
            <li><strong>Favorite Player:</strong> {playercard.playerFavPlayer}</li>
          </ul>
        </div> 
        )
    


// const mapStateToProps = state => {
//     return ({
//     currentUser: state.currentUser
//   })
//   }

    }



export default connect(null, {getMyPlayerCard}) (PlayerCard)