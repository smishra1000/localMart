// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css'; // Import your CSS file for styling

const Navbar = () => {
  const handleLogout = () => {
    // Implement logout logic here
    localStorage.removeItem('token');
    window.location.reload(); // Reload the page after logout
  };

  return (
    <nav className="navbar">
      <div className="logo">LocalMart</div>
      <ul className="nav-items">
        <li className="nav-item">
          <a href="/products">Products</a>
        </li>
        <li className="nav-item">
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </li>
        <li className="nav-item profile-icon">
          <div className="profile-circle">P</div>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
