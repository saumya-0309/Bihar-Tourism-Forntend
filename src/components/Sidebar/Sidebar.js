import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <ul className="nav">
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#c012ff'}} to="/dashboard">
            <span className="menu-title">Dashboard</span>
            <i className="mdi mdi-home menu-icon" style={{color:'#c012ff'}}></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#c012ff'}} to="/bookings">
            <span className="menu-title">Bookings</span>
            <i className="mdi menu-icon mdi-sale" style={{color:'#c012ff'}}></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#c012ff'}} to="/alltour">
            <span className="menu-title">All Tours</span>
            <i className="mdi mdi-chart-line-variant menu-icon" style={{color:'#c012ff'}}></i>
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{color:'#c012ff'}} to="/addtour">
            <span className="menu-title">Add Tour</span>
            <i className="mdi mdi-note-plus menu-icon" style={{color:'#c012ff'}}></i>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
