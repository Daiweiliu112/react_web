import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';




import { Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


import ScrollToTop from './pages/js/ScrollToTop.js'
import Footer from './comp/js/Footer.js';
import Contact from './pages/js/Contact.js';
import Home from './pages/js/Home.js';
import Project1 from './pages/js/Project1.js';
import Project2 from './pages/js/Project2.js';
import Project3 from './pages/js/Project3.js';







class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      // Router links to be implemented
      title: 'David Liu',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'Contact', path: '/Contact' },
        { title: 'Project 1', path: '/Project1' },
        { title: 'Project 2', path: '/Project2' },
        { title: 'Project 3', path: '/Project3' }
      ],

      home: {
        title: "Nice to meet you!",
        text: "My name is David Liu"
      },

      contact: {
        title: "Contact me"
      },

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
    // cahnged the routing method since we are not passing any props from App to it.
    // kept having the issue with routed page not displaying anything.
    return (
      <div>
        <Router>
          <ScrollToTop />
          <Container className="p-0" fluid={true}>
            <Navbar bg="dark" variant="dark">
              <Navbar.Brand > David Liu </Navbar.Brand>
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/Project1">Project 1</Link>
                <Link className="nav-link" to="/Project2">Project 2</Link>
                <Link className="nav-link" to="/Project3">Project 3</Link>
                <Link className="nav-link" to="/Contact ">Contact</Link>
              </Nav>


            </Navbar>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/Contact" exact render={() => <Contact title={this.state.contact.title} />} />
              <Route path="/Project1" component={Project1} />
              <Route path="/Project2" component={Project2}/>
              <Route path="/Project3" component={Project3}/>
            </Switch>
            <Footer />



          </Container>
        </Router>


      </div>
    )
  }
}

export default App;
