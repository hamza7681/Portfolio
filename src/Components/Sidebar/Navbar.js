import React,{useState} from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../Assets/logo.png";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
} from "react-icons/all";

function NavbarMenu() {

const [colorChange, setColorChange] = useState(false)
  const changeNavbar =()=>{
    if(window.scrollY >=80){
      setColorChange(true)
    }
    else{
      setColorChange(false)
    }
  }
window.addEventListener('scroll', changeNavbar)
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={colorChange ? 'new_navbar' : 'navbar_main'}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="nav_link">
              <img src={logo} alt="Hamza Siddique" className="logo" />
              <span className="navbar_brand">Hamza Siddique</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{backgroundColor:'orangered'}} />
          <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="ml-auto ">
              <Nav.Link>
                <Link to="/" className="navbar_list">
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/cv" className="navbar_list">
                Curriculum Vitae
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/contact-me" className="navbar_list">
                  Contact Me
                </Link>
              </Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
    </>
  );
}

export default NavbarMenu;
