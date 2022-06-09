import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-primary ">
      <div className="container-fluid container">
        <a className="navbar-brand text-white" href="#">Raju Ahmed</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/home" className="nav-link active text-white" aria-current="page" href="#">Home</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link active text-white" aria-current="page" href="#">Contact Me</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link active text-white" aria-current="page" href="#">About Me</Link>
            </li>

          </ul>
        </div>
        <div>
          <ul className="navbar-nav fw-bolder fs-5">
            <li className="nav-item">
              {/* <Link to="/*" className="nav-link active text-white" aria-current="page"href="Raju-Resume-2022.pdf" download="Raju-Resume-2022.pdf">Download Resume</Link> */}
              <a class="btn btn-primary active text-white "  href="Raju-Resume-2022.pdf" download="Raju-Resume-2022.pdf">
              Download Resume
              </a>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;