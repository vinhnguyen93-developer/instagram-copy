import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link, withRouter, Redirect } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

import logo from '../assets/logo.png';
// import browser from '../assets/browser.png';
// import notification from '../assets/notification.png';
// import photo from '../assets/photo.png';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      profilePictureUrl: ''
    }

    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);

    this.setState({
      profilePictureUrl: decoded.profilePictureUrl
    });
  }

  logOut(event) {
    event.preventDefault();
    localStorage.removeItem('usertoken');
    this.props.history.push('/login');
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render() {

    const loginRegisterLink = (
      <Nav className="ml-auto mr-5" navbar>
        <NavItem>
          <NavLink>
            <Link to="/login">
              Login
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    );

    const userLink = (
      <Nav className="ml-auto mr-5" navbar>
        <NavItem>
          <Link to="/">
            <NavLink>
              Home
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/posts">
            <NavLink>
              Post
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <NavLink onClick={this.logOut} href="#">
            Logout
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink>
            <Link to="/profile">
              <img src={this.state.profilePictureUrl} className="rounded-circle" width={32} height={32} />
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    );

    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand className="ml-5 mr-5">
            <Link to="/">
              <img src={logo} />
            </Link>
          </NavbarBrand>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search..." aria-label="Search" />
          </form>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            {localStorage.usertoken ? userLink : loginRegisterLink}
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default withRouter(Navigation);