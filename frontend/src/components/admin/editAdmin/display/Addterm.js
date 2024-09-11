import React, { useState } from 'react';
import './add_term.css'; // Import your CSS
import kjscelogo from '../photos-logos/KJSCE-logo.png';
import { Link } from 'react-router-dom';
import TemplatePage from './components/template';
import AddLeftSection from './components/add-left-section';
import AddRightSection from './components/add-right-section';

const AdminLandingPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [rows, setRows] = useState([]);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="main">
      <header>
        <div className="navbar">
          <Link to="/"><img className="somaiya-logo-main" src={kjscelogo} alt="somaiya-logo" /></Link>
          <button className="logoutBtn">Logout
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </header>

      <div id="sidebar" style={{ width: isSidebarOpen ? "250px" : "0" }}>
        <Link to="/addterm"><button className="nav-btn">Add Syllabus</button></Link>
        <Link to="/clgcourses"><button className="nav-btn">Allocation for College Courses</button></Link>
        <Link to="/broadcast">
          <button className="nav-btn">Broadcast Message</button>
        </Link>
      </div>

      <div id="side-nav">
        <span onClick={toggleSidebar}>&#9776;</span>
      </div>
      <TemplatePage />
      <div className='content'>
        {/* Pass rows and setRows to child components */}
        <AddLeftSection rows={rows} setRows={setRows} />
        <AddRightSection rows={rows} setRows={setRows} />
      </div>
    </div>
  );
};

export default AdminLandingPage;
