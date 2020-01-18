import React from "react";
import {connect} from 'react-redux'
import {updateSignupForm} from '../actions/signupForm.js'
import {signup} from '../actions/currentUser.js'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';

const Signup = ({signupFormData, updateSignupForm, signup, history}) => {

  const handleChange = event => {
      const {name, value} = event.target
      const updateFormInfo = {
          ...signupFormData,
          [name]: value
      }
      updateSignupForm(updateFormInfo)
  }

  const handleSubmit = event => {
      event.preventDefault()
      signup(signupFormData, history)
  }

  return (
    <Container className="loginForm">
    <Form onSubmit={handleSubmit}>
    <Form.Group controlId="formBasicUsername">
        <input type="text" 
                value={signupFormData.username} 
                name="username" 
                placeholder="username"
                onChange={handleChange}/> <br/>
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
        <input type="text" 
                value={signupFormData.email} 
                name="email" 
                placeholder="email"
                onChange={handleChange}/> <br/>
      </Form.Group>
        <Form.Group controlId="formBasicPassword">
        <input type="password" 
                value={signupFormData.password} 
                name="password" 
                placeholder="password"
                onChange={handleChange}/> <br/>
         </Form.Group>
         <Form.Control className="loginButton"type="submit" value="Signup"/>
     </Form>
    </Container>
  )
}

  const mapStateToProps = (state) => {
    return {
        signupFormData: state.signupForm
    }
}


export default connect(mapStateToProps, {updateSignupForm, signup})(Signup)