import React from 'react'
import { connect } from 'react-redux'
import { createPlayerCard } from '../actions/myPlayerCard.js'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
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

  handleSubmit = (event)=> {
    event.preventDefault()
    let userId = this.props.location.pathname.split('/')[2]
    this.props.createPlayerCard(this.state, userId)
    this.props.history.push(`/player_card/${userId}`)
    this.setState({
      playerNickname: "",
      playerHeightFeet: "",
      playerHeightInches: "",
      playerAge: "",
      playerWeight: "",
      playerFavPlayer: "",
      user_id: userId
    })
    
  }
  

render(){

 return ( 
    
    <Container className="playerCardForm"> 
      <Form onSubmit={this.handleSubmit}>        
        <Form.Group controlId="formPlayerNickname">
          <Form.Label>What is your nickname on the court?</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.playerNickname}
              name="playerNickname" 
              onChange={this.handleChange}/><br/>
         </Form.Group>

        <Form.Group controlId="formPlayerHeight">
          <Form.Label>How tall are you?</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.playerHeightFeet}
              name="playerHeightFeet" 
              onChange={this.handleChange}/> Feet
            <Form.Control 
              type="text" 
              value={this.state.playerHeightInches}
              name="playerHeightInches" 
              onChange={this.handleChange}/>Inches<br/>
        </Form.Group>

        <Form.Group controlId="formPlayerWeight">
          <Form.Label>How much do you weigh?</Form.Label>
            <Form.Control 
              type="text" 
              value={this.state.playerWeight}
              name="playerWeight" 
              onChange={this.handleChange}/>Lbs<br/>
        </Form.Group>

        <Form.Group controlId="formPlayerAge">
          <Form.Label>How old are you?</Form.Label>
            <Form.Control 
              type="text"
              value={this.state.playerAge} 
              name="playerAge" 
              onChange={this.handleChange}/><br/>
        </Form.Group>

        <Form.Group controlId="formPlayerFavPlayer">
          <Form.Label>Who is your favorite basketball player?</Form.Label>
            <Form.Control 
              type="text" 
              value={this.state.playerFavPlayer}
              name="playerFavPlayer" 
              onChange={this.handleChange}/><br/>
        </Form.Group>
        <Form.Control type="submit" value={"Create Player Card"} />
      </Form>
    </Container> 
     )
    };
  }

  const mapStateToProps = (state) => {
    return {
      playerCardData: state.playerCardData
    }
  }

  export default withRouter(connect( mapStateToProps, {createPlayerCard})(PlayerCardForm))
