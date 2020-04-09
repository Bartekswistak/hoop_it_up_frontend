import React from 'react'
import {connect} from 'react-redux'
import Container from 'react-bootstrap/Container';
import PlayerCard from '../components/PlayerCard'
// import PlayerCardForm from '../components/PlayerCardForm'
// import {getMyPlayerCard} from '../actions/myPlayerCard'

class PlayerCardContainer extends React.Component {

  // componentDidMount() {
  //   this.props.getMyPlayerCard()
  // }


  render(){ 
    return (  
      <Container>
      {/* if playercard, render playercard, else render form */}
        <PlayerCard  currentUser = {this.props.currentUser}/>
      </Container>
    )
  }
}


const mapStateToProps = state => {
     return ({
      currentUser: state.currentUserReducer
    })
  }


export default connect(mapStateToProps)(PlayerCardContainer)