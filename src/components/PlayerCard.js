import React from 'react'
import {connect} from 'react-redux'

class PlayerCard extends React.Component {

    render(){

    return(
        <div className="playercard">
            <h3>Nickname on the Court: {this.props.currentUser.playercard.player_nickname}</h3>
          
            Height: {this.props.currentUser.playercard.player_height_in_feet} feet {this.props.currentUser.playercard.player_height_in_inches} inches
            <br></br>
            Weight: {this.props.currentUser.playercard.player_weight} lbs
            <br></br>
            Age: {this.props.currentUser.playercard.player_age}
            <br></br>
            Favorite Player: {this.props.currentUser.playercard.player_fav_player}
            <br></br>
            <button>Edit my Player Card </button>
        </div> 
        )        
    }
}

const mapStateToProps = state => {
    return ({
     currentUser: state.currentUserReducer,
     playercard: state.myPlayerCardReducer
   })
 }

export default connect(mapStateToProps) (PlayerCard)