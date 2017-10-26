import React, { Component } from 'react'
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'react-bootstrap'

class Login extends Component {
  constructor() {
    super()

    this.state = {
      email: '',
      password: '',
      validEmail: null,
      errorMsg: false
    }
  }

  validateEmail(email) {
    let re = /\S+@\S+\.\S+/
    return re.test(email);
  }

  watchEmailForm(event) {
    this.setState({ email: event.target.value })

    this.validateEmail(this.state.email) ?
      this.setState({ validEmail: 'success' })
    :
      this.setState({ validEmail: 'error' })
  }

  submitForm() {
    if(this.validateEmail(this.state.email)) {
      let body = {
        "email": this.state.email,
        "password": this.state.password
      }
      return this.retrieveToken(body)
    } else {
      // display msg saying 'Please insert correct email'
    }
  }

  retrieveToken(bodyEP) {
    let url = 'https://agile-wave-60105.herokuapp.com/api/v1/auth/login'
    // let url = 'http://localhost:8080/api/v1/auth/login'
    fetch(url, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(bodyEP)
    })
      .then(res => res.json())
      .then(data =>
        this.validateToken(data)
    )
    .catch(err => {
      console.log('something happened');
    })
  }

  validateToken(data) {
    if (data.token) {
      localStorage.setItem('token', data.token)
      window.location.href= '/dashboard'
    } else {
      localStorage.removeItem('token')
      console.log(data.error)
    }
  }

  render() {
    return (
      <div className='login-container'>
        <div className='login-background'></div>
        <Form id='login-form'>
          <FormGroup validationState={ this.state.validEmail }>
            <ControlLabel>Email:</ControlLabel>
            {' '}
            <FormControl
              type='email'
              onChange={ event => this.watchEmailForm(event) }
            ></FormControl>
          </FormGroup>
          {' '}
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl
              type='password'
              onChange={ event => this.setState({ password: event.target.value }) }
            ></FormControl>
          </FormGroup>
          <Button
            className='login-btn'
            onClick={ () => this.submitForm() }
          >
            Login
          </Button>
        </Form>
      </div>
    )
  }
}

export default Login
