import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { Link } from 'react-router-dom';

import logo from '../assets/logo.png';
import browser from '../assets/browser.png';
import notification from '../assets/notification.png';
import photo from '../assets/photo.png';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand className="ml-5 mr-5">
          <Link to="/">
            <img src={logo} />
          </Link>
        </NavbarBrand>
        <form class="form-inline my-2 my-lg-0">
          <input class="form-control mr-sm-2" type="search" placeholder="Tìm kiếm..." aria-label="Search" />
        </form>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto mr-5" navbar>
            <NavItem>
              <NavLink>
                <Link to="/">
                  <img src={browser} />
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">
                  <img src={photo} />
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/">
                  <img src={notification} />
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to="/login">
                  <img src="https://picsum.photos/id/237/200/300" className="rounded-circle" width={32} height={32} />
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}