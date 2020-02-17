import React from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import PlayerCard from '../components/PlayerCard'
import PlayerCardForm from '../components/PlayerCardForm'
import {getMyPlayerCard} from '../actions/myPlayerCard'

class PlayerCardContainer extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getMyPlayerCard()
  }


  render(){ 
    return (  
      <Container>
        <h1>{currentUser.username}'s Player Card </h1>
        <PlayerCardForm/>
      </Container>
    )
  }
}


const mapStateToProps = state => {
     return ({
      currentUser: state.currentUserReducer
    })
  }


export default connect(mapStateToProps, {getMyPlayerCard})(PlayerCardContainer);