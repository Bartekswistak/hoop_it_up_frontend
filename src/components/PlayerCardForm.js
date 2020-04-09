import React from 'react'
import { connect } from 'react-redux'
import { createPlayerCard } from '../actions/myPlayerCard.js'
// import Form from 'react-bootstrap/Form';
// import Container from 'react-bootstrap/Container';
import { withRouter } from 'react-router-dom';

class PlayerCardForm extends React.Component { 

  state = {
    playerNickname: "",
    playerHeightFeet: "",
    playerHeightInches: "",
    playerAge: "",
    playerWeight: "",
    playerFavPlayer: ""
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
      playerNickname: "",
      playerHeightFeet: "",
      playerHeightInches: "",
      playerAge: "",
      playerWeight: "",
      playerFavPlayer: ""
    })  
  }

  render() {
    return ( 
      <form onSubmit= {this.handleSubmit}> 

       <h1>Create Your PlayerCard</h1>
        
          <label>What is your nickname on the court?</label>
            <input type="text"
              value={this.state.playerNickname}
              name="playerNickname" 
              onChange={this.handleChange}/><br/>

          <label>How tall are you?</label>
            <input type="integer"
              value={this.state.playerHeightFeet}
              name="playerHeightFeet" 
              onChange={this.handleChange}/> Feet
            <input type="integer" 
              value={this.state.playerHeightInches}
              name="playerHeightInches" 
              onChange={this.handleChange}/>Inches<br/>
        
          <label>How much do you weigh?</label>
            <input 
              type="integer" 
              value={this.state.playerWeight}
              name="playerWeight" 
              onChange={this.handleChange}/>Lbs<br/>
       
       <label>How old are you?</label>
            <input type="integer"
              value={this.state.playerAge} 
              name="playerAge" 
              onChange={this.handleChange}/><br/>
       
          <label>Who is your favorite basketball player?</label>
            <input type="text" 
              value={this.state.playerFavPlayer}
              name="playerFavPlayer" 
              onChange={this.handleChange}/><br/>
        
        <input type="submit" value={"Create Player Card"} />
      </form>
    )
  } 
}

export default withRouter(connect(null, {createPlayerCard})(PlayerCardForm))
