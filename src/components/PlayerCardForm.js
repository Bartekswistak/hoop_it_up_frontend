import React from 'react'
import { connect } from 'react-redux'
import { createPlayerCard } from '../actions/myPlayerCard.js'
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import { withRouter } from 'react-router-dom';

class PlayerCardForm extends React.Component { 

  state = {
    player_nickname: "",
    player_height_in_feet: "",
    player_height_in_inches: "",
    player_age: "",
    player_weight: "",
    player_fav_player: ""
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let userId = Number(this.props.location.pathname.split("/")[2])
//debugger
    this.props.createPlayerCard({...this.state, user_id: userId}, userId, this.props.history)
    
    this.setState({
      player_nickname: "",
      player_height_in_feet: "",
      player_height_in_inches: "",
      player_age: "",
      player_weight: "",
      player_fav_player: ""
    })  
  }

  render() {
    return ( 
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
    )
  } 
}

export default withRouter(connect(null, {createPlayerCard})(PlayerCardForm))
