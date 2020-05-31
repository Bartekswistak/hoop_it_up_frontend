import React from 'react';
import './App.css';
import AppHeader from "./components/AppHeader.js"
import {connect} from 'react-redux'
// import { fetchPlayercard } from './actions/myPlayerCard.js'
import { fetchUsers } from './actions/fetchUsers.js'
import {BrowserRouter as Router} from 'react-router-dom'
import Home from './components/Home.js'
import NavBar from './components/Navbar.js'

class App extends React.Component {

  componentDidMount() {
    this.props.fetchUsers()
    // this.props.fetchPlayercard()
  }

  render(){
      return (
          <div className="App">
            <header className="App-header"> 
              <Router>
              <Home/>
                {this.props.currentUser.id > 0 ? <NavBar/> : <AppHeader/>}
              </Router>
            </header>
          </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return ({
      loggedIn: !!state.currentUserReducer,
      currentUser: state.currentUserReducer,
      users: state.usersReducer,
      playerCard: state.myPlayerCardReducer    
    })
  }

  export default connect(mapStateToProps, {fetchUsers})(App);
