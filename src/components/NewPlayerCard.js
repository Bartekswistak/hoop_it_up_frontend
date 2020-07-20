import React from 'react'
import {connect} from 'react-redux'
import EditNewCard from './EditNewCard.js'


class NewPlayerCard extends React.Component {

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
      <h3 id="nickname"> {this.props.playercard.playercard.player_nickname}</h3>
      <div id="card-image"></div>
    <div id="stats">
      Height: {this.props.playercard.playercard.player_height_in_feet} feet {this.props.playercard.playercard.player_height_in_inches} inches
      <br></br>
      Weight: {this.props.playercard.playercard.player_weight} lbs
      <br></br>
      Age: {this.props.playercard.playercard.player_age}
      <br></br>
      Favorite Player: {this.props.playercard.playercard.player_fav_player}
      <br></br>
      </div>
      <button onClick={this.handleClick}> Edit my Player Card 
      </button>
  </div> 
        )
    }
        return <EditNewCard />      
    }
}

const mapStateToProps = state => {
    return ({
     playercard: state.myPlayerCardReducer,
     currentUser: state.currentUserReducer
   })
 }

export default connect(mapStateToProps) (NewPlayerCard)