import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/events">Event Management</Link>
        </li>
        <li>
          <Link to="/attendees">Attendee Management</Link>
        </li>
        <li>
          <Link to="/tasks">Task Tracker</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
