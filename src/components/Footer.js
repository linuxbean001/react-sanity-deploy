import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import '../assets/css/style.css';

function Footer() {
  return (
   <Container fluid className="pt-3 bg-dark">
      <footer className="Footer m-5">
         <Row className="p-5">
            <Col className=" mr-5 d-flex justify-content-end">
               <form action="https://arcadeagroup.us6.list-manage.com/subscribe/post" method="POST">
                  <input type="hidden" name="u" value="526cde56bb3f37173cfaa0a6b"/><input type="hidden" name="id" value="256e73495e"/>
                  <h3 className="text-white ">The Arcadea Brief</h3>
                  <p className="text-white ">Join the Arcadea Brief, where we share <br/> our latest ideas and lessons learned, <br/> straight to your inbox.</p>
                  <div><input type="email" className="p-2 border border-white bg-dark" name="EMAIL" placeholder="Your email" required=""/><a className="readmore" href="/" type="submit">Sign&nbsp;up</a></div>
               </form>
            </Col>
            
         </Row>
         <Row className="mt-5 pb-5">
            <Col className="d-flex justify-content-center pt-3">
               <p className="text-white ">
                  © Copyright Arcadea Group 2021
               </p>
            </Col>
            <Col className="d-flex flex-row mt-2">
               <a className="p-2 text-white text-decoration-none" href="/">Philosophy</a>
               <a className="p-2 text-white text-decoration-none" href="/">Perspectives</a>
               <a className="p-2 text-white text-decoration-none" href="/">People</a>
               <a className="p-2 text-white text-decoration-none" href="/">Blog</a>
               <a className="p-2 text-white text-decoration-none" href="mailto:info@arcadeagroup.com">Contact</a>
            </Col>
         </Row>
      </footer>
   
   </Container>
  );
}

export default Footer;
