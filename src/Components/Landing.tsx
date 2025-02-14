import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Landing extends Component {
  render() {
    return (
      <> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary p-2">
          <div className="container-fluid">
            <Link className="navbar-brand fw-bold fs-3" to="/">Landing Page</Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/Home">
                    <i className="fa fa-home me-1"></i> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/calendar">
                    <i className="fa fa-calendar me-1"></i> Calendar
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/reports">
                    <i className="fa fa-file-alt me-1"></i> Reports
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/dashboard">
                    <i className="fa fa-tachometer-alt me-1"></i> Dashboard
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-light" to="/contacts">
                    <i className="fa fa-address-book me-1"></i> Contacts
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        
        <div className="container mt-4">
          <div className="row">
           
            <div className="col-md-3">
              <div className="card text-center p-3 shadow">
                <i className="fa fa-user fa-3x text-primary"></i>
                <div className="card-body">
                  <h5 className="card-title">Profile</h5>
                  <p className="card-text">View and edit your profile details.</p>
                </div>
              </div>
            </div>

           
            <div className="col-md-3">
              <div className="card text-center p-3 shadow">
                <i className="fa fa-calendar-alt fa-3x text-success"></i>
                <div className="card-body">
                  <h5 className="card-title">Calendar</h5>
                  <p className="card-text">Manage your events and meetings.</p>
                </div>
              </div>
            </div>

           
            <div className="col-md-3">
              <div className="card text-center p-3 shadow">
                <i className="fa fa-chart-bar fa-3x text-warning"></i>
                <div className="card-body">
                  <h5 className="card-title">Reports</h5>
                  <p className="card-text">Check performance reports and stats.</p>
                </div>
              </div>
            </div>

           
            <div className="col-md-3">
              <div className="card text-center p-3 shadow">
                <i className="fa fa-cogs fa-3x text-danger"></i>
                <div className="card-body">
                  <h5 className="card-title">Settings</h5>
                  <p className="card-text">Customize your application settings.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pie-chart"></div>
      </>
    );
  }
}

export default Landing;
