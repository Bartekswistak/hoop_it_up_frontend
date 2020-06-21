import React from 'react'
import {connect} from 'react-redux'
import EditPlayerCard from './EditPlayerCard.js'



class PlayerCard extends React.Component {

    constructor() {
        super();
    
        this.state = {
          clicked: false
        };
    
        this.handleClick = this.handleClick.bind(this);
      }
    
      handleClick() {
        this.setState({
          clicked: true
        });
      }

    render(){
      // debugger
        if (!this.state.clicked) {
    return(
        <div className="playercard">
            <h3 id="nickname">Nickname on the Court: {this.props.currentUser.playercard.player_nickname}</h3>
          <div id="stats">
            Height: {this.props.currentUser.playercard.player_height_in_feet} feet {this.props.currentUser.playercard.player_height_in_inches} inches
            <br></br>
            Weight: {this.props.currentUser.playercard.player_weight} lbs
            <br></br>
            Age: {this.props.currentUser.playercard.player_age}
            <br></br>
            Favorite Player: {this.props.currentUser.playercard.player_fav_player}
            <br></br>
            </div>
            <button onClick={this.handleClick}> Edit my Player Card 
            </button>
        </div> 
        )   
    }
    return <EditPlayerCard/>     
    }
}

const mapStateToProps = state => {
    return ({
     currentUser: state.currentUserReducer,
     playercard: state.myPlayerCardReducer
   })
 }

export default connect(mapStateToProps) (PlayerCard)