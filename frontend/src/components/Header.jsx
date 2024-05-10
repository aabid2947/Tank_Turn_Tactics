import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"; // Import your CSS file

export default function Header() {
  return (
    <>
      <nav className="custom-navbar navbar navbar-expand-lg py-3">
        <div className="container-fluid">
          <a
            style={{ color: "#ffffff", textDecoration: "None" }}
            className=" fs-1"
            href="#"
          >
            Navbar
          </a>
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
          <div
            className="custom-ul collapse navbar-collapse"
            id="navbarSupportedContent"
          >
            <ul className=" navbar-nav me-auto mx-4 mb-lg-0 fs-2 ">
              <li className="nav-item mx-4 ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-4 ">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item mx-4  dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
            <button type="button" className="btn btn-primary fs-2 me-3  px-5 rounded-pill">
              Login
            </button>
            <button
              className="btn btn-outline-success fs-2 text-white px-5 border-white rounded-pill"
              type="submit"
            >
              SignUp
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
