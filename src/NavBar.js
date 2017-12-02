import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
          <Nav bsStyle="pills">
          <NavItem title="Whats New">WHATS NEW</NavItem>
          <NavItem title="About">ABOUT</NavItem>
          <NavItem title="Dharma Talks">DHARMA TALKS</NavItem>
        </Nav>
        );
    }
}

export default NavBar;
