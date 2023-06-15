import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './NavBar.css';

const NavigationBar = () => {
  const handleScroll = (event, targetId) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    targetElement.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navbar-container">
      <Navbar expand="lg" className="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
        <Nav className="ml-auto d-flex align-items-center">
          <Nav.Link href="#home" onClick={(event) => handleScroll(event, 'home')} className="nav-link mx-3">
            Home
          </Nav.Link>
          <Nav.Link href="#about" onClick={(event) => handleScroll(event, 'about')} className="nav-link mx-3">
            About
          </Nav.Link>
          <Nav.Link href="#projects" onClick={(event) => handleScroll(event, 'projects')} className="nav-link mx-3">
            Projects
          </Nav.Link>
          <Nav.Link href="#skills" onClick={(event) => handleScroll(event, 'skills')} className="nav-link mx-3">
            Skills
          </Nav.Link>
          <Nav.Link href="#contact" onClick={(event) => handleScroll(event, 'contact')} className="nav-link mx-3">
            Contact
          </Nav.Link>
          <div className="flex-grow-1" />
          <Nav.Link href="https://github.com/alexsg2" target="_blank" className="nav-link mx-3">
            <FontAwesomeIcon icon={faGithub} />
          </Nav.Link>
          <Nav.Link href="https://www.linkedin.com/in/alexandersg-/" target="_blank" className="nav-link mx-3">
            <FontAwesomeIcon icon={faLinkedin} />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};

export default NavigationBar;