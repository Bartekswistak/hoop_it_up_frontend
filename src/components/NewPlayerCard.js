import React from 'react'
import {connect} from 'react-redux'

class NewPlayerCard extends React.Component {

render(){
    //  debugger
    return(
        <div className="playercard">
            <h3>Nickname on the Court: {this.props.playercard.playercard.player_nickname}</h3>
          
            Height: {this.props.playercard.playercard.player_height_in_feet} feet {this.props.playercard.playercard.player_height_in_inches} inches
            <br></br>
            Weight: {this.props.playercard.playercard.player_weight} lbs
            <br></br>
            Age: {this.props.playercard.playercard.player_age}
            <br></br>
            Favorite Player: {this.props.playercard.playercard.player_fav_player}
            <br></br>
            <button>Edit my Player Card </button>
        </div> 
        )      
    }
}

const mapStateToProps = (state) => ({
     currentUser: state.currentUserReducer,
     playercard: state.myPlayerCardReducer
   })
 

export default connect(mapStateToProps) (NewPlayerCard)