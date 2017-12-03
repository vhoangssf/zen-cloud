import React from 'react';
import { NavItem, Nav } from 'react-bootstrap';

class NavBar extends React.Component {
    render() {
        return (
          <Nav bsStyle="pills">
          <NavItem title="Whats New">WHATS NEW</NavItem>
          <NavItem title="About">ABOUT</NavItem>
          <NavItem title="Dharma Talks">DHARMA TALKS</NavItem>
          <NavItem title=""></NavItem>
          <NavItem title="Online Courses">ONLINE COURSES</NavItem>
          <NavItem title="Chanting">CHANTING</NavItem>
          <NavItem title="Talks for Kids">TALKS FOR KIDS</NavItem>
          <NavItem title="Search">SEARCH</NavItem>
        </Nav>
        );
    }
}

export default NavBar;
