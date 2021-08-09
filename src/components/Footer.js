import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer() {
  return (
   <Container className="pt-3">
      <footer className="Footer">
         <Row>
      
            <Col>
               <form action="https://arcadeagroup.us6.list-manage.com/subscribe/post" method="POST">
                  <input type="hidden" name="u" value="526cde56bb3f37173cfaa0a6b"/><input type="hidden" name="id" value="256e73495e"/>
                  <h3>The Arcadea Brief</h3>
                  <p>Join the Arcadea Brief, where we share our latest ideas <br/> and lessons learned, straight to your inbox.</p>
                  <div><input type="email" name="EMAIL" placeholder="Your email" required=""/><button type="submit">Sign&nbsp;up</button></div>
               </form>
            </Col>
         
            <Col className="d-flex flex-row">
               <Link className="p-2 " to="#">Philosophy</Link>
               <Link className="p-2 " to="#">Perspectives</Link>
               <Link className="p-2 " to="#">People</Link>
               <Link className="p-2 " to="#">Blog</Link>
               <Link className="p-2 " to="mailto:info@arcadeagroup.com">Contact</Link>
            </Col>
         </Row>
         <Row>
            <Col className="d-flex justify-content-center pt-3">
               <p>
                  © Copyright Arcadea Group 2021
               </p>
            </Col>
         </Row>
      </footer>
   
   </Container>
  );
}

export default Footer;
