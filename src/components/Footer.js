import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <>
    <footer className="Footer">
       <div>
          <form action="https://arcadeagroup.us6.list-manage.com/subscribe/post" method="POST">
             <input type="hidden" name="u" value="526cde56bb3f37173cfaa0a6b"/><input type="hidden" name="id" value="256e73495e"/>
             <h3>The Arcadea Brief</h3>
             <p>Join the Arcadea Brief, where we share our latest ideas and lessons learned, straight to your inbox.</p>
             <div><input type="email" name="EMAIL" placeholder="Your email" required=""/><button type="submit">Sign&nbsp;up</button></div>
          </form>
       </div>
       <nav>
          <p>
             © Copyright Arcadea Group 2021
          </p>
          <div><Link to="/philosophy">Philosophy</Link><Link to="/perspectives">Perspectives</Link><Link to="/people">People</Link><Link to="mailto:info@arcadeagroup.com">Contact</Link></div>
       </nav>
    </footer>
    </>
  );
}

export default Footer;
