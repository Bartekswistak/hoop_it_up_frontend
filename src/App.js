import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader.js"
import {connect} from 'react-redux'
import {getCurrentUser} from './actions/currentUser.js'
import { getMyPlayerCard} from './actions/myPlayerCard.js'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/Navbar.js'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
    this.props.getMyPlayerCard()
  }

  render(){
    const { loggedIn } = this.props
  
      return (
          <div className="App">
            <header className="App-header"> 
              <Router>
              <Home/>
              {loggedIn ? <NavBar/> : <AppHeader/>}
              </Router>
            </header>
          </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      loggedIn: !!state.currentUser,
      currentUser: state.currentUser,
      myPlayerCard: state.myPlayerCard    
    }
  }

  export default connect(mapStateToProps, {getCurrentUser, getMyPlayerCard})(App);
