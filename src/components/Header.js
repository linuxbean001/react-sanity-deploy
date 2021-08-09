import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import '../assets/css/Navbar.css';
import Col from 'react-bootstrap/Col';

function Header() {
  return (
   <Container fluid>
      <Row>
         <Col className="d-flex">
         <Navbar/>
            <nav className="Nav pt-3">
               <Link className="" to="/"><img src="https://www.arcadeagroup.com/logo.svg" alt="Arcadea Group"/></Link>
            </nav>
         </Col>
         {/* <Link to="#" className="Nav__hamburger">
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="Nav__hamburger__open">
               <path d="M3 11L13 11" stroke="#221F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
               <path d="M3 5L13 5" stroke="#221F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
            <svg width="24" height="24" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="Nav__hamburger__close">
               <path d="M4 12L12 4" stroke="#221F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
               <path d="M4 4L12 12" stroke="#221F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
         </Link>
         <Link to="#">Philosophy</Link>
         <Link to="#">Perspectives</Link>
         <Link to="#">People</Link>
         <Link to="#">Blog</Link>
         <Link to="mailto:info@arcadeagroup.com">
            Contact
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.66669 11.3333L11.3334 4.66663" stroke="#221F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
               <path d="M4.66669 4.66663H11.3334V11.3333" stroke="#221F1F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
            </svg>
         </Link> */}
      </Row>
   </Container>
  );
}

export default Header;
