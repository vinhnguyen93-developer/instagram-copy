import React, { Component } from 'react';
import { useHistory, Redirect } from "react-router-dom";

import { login, register } from '../components/userFunction';

import logo from '../assets/logo.png';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };

    this.showLogin = this.showLogin.bind(this);
    this.showRegister = this.showRegister.bind(this);
  }

  showLogin() {
    this.setState({
      isLoginOpen: true,
      isRegisterOpen: false
    });
  }

  showRegister() {
    this.setState({
      isLoginOpen: false,
      isRegisterOpen: true
    });
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-6 col-md-4">
            { this.state.isLoginOpen && <LoginBox showRegister={this.showRegister}/> }
            { this.state.isRegisterOpen && <RegisterBox showLogin={this.showLogin} /> }
          </div>
        </div>
      </div>
    )
  }
}

class LoginBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    const value = e.target.value;

    this.setState({
      [e.target.name]: value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password
    }

    login(user).then(res => {
      if(res) {
        return <Redirect to='/' />
      }
    });
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <img src={logo} />
        <div class="form-group mt-3">
          <input 
          type="email" 
          name="email"
          class="form-control" 
          placeholder="Email" 
          value={this.state.email}
          onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <input 
          type="password" 
          name="password"
          class="form-control" 
          placeholder="Password"
          value={this.state.password}
          onChange={this.onChange} 
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Log in</button>
        <p className="mt-4">forgot password ?</p>
        <hr/>
        <p>Don't have an account ? <span className="active" onClick={this.props.showRegister}>Sign up</span></p>
      </form>
    );
  }
}

class RegisterBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const newUser = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password
    }

    register(newUser).then(res => {
      this.props.history.push('/login');
    });
  }

  render() {
    return (
      <form className="form-container" onSubmit={this.onSubmit}>
        <img src={logo} />
        <div class="form-group mt-3">
          <input 
          type="text" 
          name="name"
          class="form-control" 
          placeholder="Name" 
          value={this.state.name}
          onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <input 
          type="email" 
          name="email"
          class="form-control" 
          placeholder="Email" 
          value={this.state.email}
          onChange={this.onChange}
          />
        </div>
        <div class="form-group">
          <input 
          type="password" 
          name="password"
          class="form-control" 
          placeholder="Password" 
          value={this.state.password}
          onChange={this.onChange}
          />
        </div>
        <button type="submit" class="btn btn-primary btn-block">Register</button>
        <hr/>
        <p>Have an account ? <span className="active" onClick={this.props.showLogin}>Log in</span></p>
      </form>
    );
  }
}

