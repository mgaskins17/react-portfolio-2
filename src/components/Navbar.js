import React from "react";
import { Link } from "react-router-dom";

// The Navbar will be the header and navbar functionality combined
export default function NavBar() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-secondary">
        <div className="container-fluid">
          {/* <a className="navbar-brand" href="/">
            M. Gaskins
          </a> */}
          <Link className="navbar-brand" to="/">M. Gaskins</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a> */}
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Me
                </a>
              </li> */}
              <li className="nav-item">
                {/* <a className="nav-link" href="/contact">
                  Contact
                </a> */}
                <Link className="nav-link active" to="/contact">Contact</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/portfolio">
                  Portfolio
                </a> */}
                <Link className="nav-link active" to="/portfolio">Portfolio</Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="/resume">
                  Resume
                </a> */}
                <Link className="nav-link active" to="/resume">Resume</Link>
              </li>
            </ul>
          </div>
          
        </div>
      </nav>
    </header>
  );
}
