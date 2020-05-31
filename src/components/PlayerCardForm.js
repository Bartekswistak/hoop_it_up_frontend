import React from 'react'
import { connect } from 'react-redux'
import { createPlayerCard, getMyPlayerCard} from '../actions/myPlayerCard.js'
import NewPlayerCard from '../components/NewPlayerCard.js'

class PlayerCardForm extends React.Component { 

  constructor(){
    super()
  

  this.state = {
    player_nickname: "",
    player_height_in_feet: "",
    player_height_in_inches: "",
    player_age: "",
    player_weight: "",
    player_fav_player: "",
    submitted: false
  }
  this.handleChange= this.handleChange.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this); 
}

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userId = this.props.currentUser.id
    this.props.createPlayerCard({...this.state, user_id: userId}, userId, this.props.history)
    // this.setState({submitted:true})
    this.state.submitted = true
    // this.showPlayerCard()

    // this.setState({
    //   player_nickname: "",
    //   player_height_in_feet: "",
    //   player_height_in_inches: "",
    //   player_age: "",
    //   player_weight: "",
    //   player_fav_player: "",
    //   submitted: false
    // })
      
  }

  // showPlayerCard() {
  //   debugger
  //   return <NewPlayerCard playercard={this.state}/>
  // }

  render() {
    // debugger
    //MAYBE CONDITIONAL RENDERING HERE, ONCE SUBMITTED, RENDER THE NEWPLAYERCARD????
      if (this.state.submitted === false) {

    return ( 
      
      <div>
        <form onSubmit= {this.handleSubmit}> 

       <h1>Create Your PlayerCard</h1>
        
          <label>What is your nickname on the court?</label>
            <input type="text"
              value={this.state.player_nickname}
              name="player_nickname" 
              onChange={this.handleChange}/><br/>

          <label>How tall are you?</label>
            <input type="integer"
              value={this.state.player_height_in_feet}
              name="player_height_in_feet" 
              onChange={this.handleChange}/> Feet
            <input type="integer" 
              value={this.state.player_height_in_inches}
              name="player_height_in_inches" 
              onChange={this.handleChange}/>Inches<br/>
        
          <label>How much do you weigh?</label>
            <input 
              type="integer" 
              value={this.state.player_weight}
              name="player_weight" 
              onChange={this.handleChange}/>Lbs<br/>
       
       <label>How old are you?</label>
            <input type="integer"
              value={this.state.player_age} 
              name="player_age" 
              onChange={this.handleChange}/><br/>
       
          <label>Who is your favorite basketball player?</label>
            <input type="text" 
              value={this.state.player_fav_player}
              name="player_fav_player" 
              onChange={this.handleChange}/><br/>
        
        <input type="submit" value={"Create Player Card"} />
      </form>
      {/* {this.state.submitted && this.showPlayerCard()} */}
    </div> 
    )
    } else {
      return( <NewPlayerCard playercard={this.state}/>)
   }
  } 
}

const mapStateToProps = (state) => {
  // console.log('state' + state)
  // debugger
  return{
      playerCardForm: state.playerCardFormReducer,
      playercard: state.myPlayerCardReducer,
      currentUser: state.currentUserReducer
    }
  }



export default connect(mapStateToProps, {createPlayerCard, getMyPlayerCard})(PlayerCardForm)
