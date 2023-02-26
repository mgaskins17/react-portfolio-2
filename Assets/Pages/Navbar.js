import React from 'react';

// TODO: Add a comment explaining how we are able to extract the key value pairs from props

// an active nav link means that the selected tab is being displayed so therefore it's active. If the currentPage boolean returns false, then a normal nav link is displayed

function Navbar({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#home"
          onClick={() => handlePageChange('Home')}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for
          // Ternary operator using the currentPage state from PortfolioContainer determing whether the link should be active or not
          className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
        >
          Home
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#about"
          onClick={() => handlePageChange('About')}
          //  TODO: Add a comment explaining what this logic is doing
          //  If the currentPage state equals 'About' then the user is on the 'About' page and therefore the page is active 
          className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          //  TODO: Add a comment explaining what this logic is doing
          // Does currentPage equal Blog, if false then the nav link isn't active if true then the nav link is active

          className={currentPage === 'contact' ? 'nav-link active' : 'nav-link'}
        >
          Blog
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#portfolio"
          //  TODO: Add a comment explaining what this logic is doing

          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;
