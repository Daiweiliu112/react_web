import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import { Nav } from 'react-bootstrap';

// have to import the css before the bootstrap will work
import 'bootstrap/dist/css/bootstrap.min.css';



class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      // Router links to be implemented
      title: 'David Liu',
      headerLinks:[
        {title:'Project 1', path:'/comp/js/Project1'},
        {title:'Project 2', path:'/comp/js/Project2'},
        {title:'Project 3', path:'/comp/js/Project3'}
      ],

      project1: {
        title: "Tech for Teletherapy",
        text: "Improving online speech therapy"
      },

      project2: {
        title: "NIST for Raspberry Pi",
        text: "Self sampling device for accurate data collection"
      },

      project3: {
        title: "NIST for Android",
        text: "Self Sampling app for android mobile"
      }
    }
  }

  render() {
    return (
      <Router>
        <Container className = "p-0" fluid = {true}> 
          <Navbar bg = "dark" variant = "dark">
            <Navbar.Brand > David Liu </Navbar.Brand>
            <Nav className = "ml-auto">
              <Link className = "nav-link" to="/comp/js/Project1">GitHub</Link>
              <Link className = "nav-link" to="/comp/js/Project2">LinkedIn</Link>
              <Link className = "nav-link" to="/comp/js/Project3">Email</Link>
            </Nav>
            

          </Navbar>
        </Container>
      </Router>
    )
  }
}
export default Header;