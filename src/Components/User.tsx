import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class User extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-secondary p-2">
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold fs-3" to="/">User Panel</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
             
              <li className="nav-item">
                <Link className="nav-link text-light" to="/myprofile">
                  <i className="fa fa-user"></i> My Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/login">
                  <i className="fa fa-sign-in-alt"></i> Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default User;
