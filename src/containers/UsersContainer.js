import React from 'react'
import {connect} from 'react-redux'
import {fetchUsers} from '../actions/fetchUsers'

class UsersContainer extends React.Component {

    componentDidMount() {
      this.props.fetchUsers()
    }

    render(){
        return(
            <div id='users_container'>
                Total Players on Hoop it Up: {this.props.users.users.length}
            </div>
        )
    }
}
    

    const mapStateToProps = state => {
        return {
          users: state.usersReducer
          
        }
      }


    export default connect(mapStateToProps, {fetchUsers})(UsersContainer)
