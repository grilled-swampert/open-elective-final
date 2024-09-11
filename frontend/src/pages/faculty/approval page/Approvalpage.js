import React, { useState } from 'react';
import './approval.css'; // Import your CSS file
import kjscelogo from '../photos-logos/KJSCE-logo.png';
import viewlogo from '../photos-logos/view.jpeg';
import approveicon from '../photos-logos/approve.png';
import rejecticon from '../photos-logos/reject.jpeg';
import { Link } from 'react-router-dom';

const ApproveStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [selectedSem, setSelectedSem] = useState('');
  const [selectedOe, setSelectedOe] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [overlayType, setOverlayType] = useState(null); // 'view', 'approve', or 'reject'

  // Toggle sidebar visibility
  const toggleNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Handle selection changes
  const handleSelectChange = (event) => {
    const { id, value } = event.target;
    if (id === 'sem-select') setSelectedSem(value);
    if (id === 'oe') setSelectedOe(value);
    if (id === 'category') setSelectedCategory(value);
  };

  // Handle file upload
  const handleFileUpload = (event) => {
    // Handle file upload logic here
    console.log('File selected:', event.target.files[0]);
  };

  // Close overlay
  const closeOverlay = () => {
    setOverlayType(null);
  };

  // Open specific overlay
  const openOverlay = (type) => {
    setOverlayType(type);
  };

  return (
    <div className="main">
      <header>
        <div className="navbar">
        <Link to = "/">
          <img className="somaiya-logo-main" src={kjscelogo} alt="somaiya-logo" />
         </Link>
          <button className="logoutBtn">
            Logout
            <i className="fa-solid fa-arrow-right-from-bracket"></i>
          </button>
        </div>
      </header>

      <div id="sidebar" style={{ width: sidebarOpen ? '250px' : '0' }}>
      <Link to= "/stuadd">
          <button className="nav-btn">Add Student</button>
      </Link>
       <Link to = "/appstu">
          <button className="nav-btn">Approve Student</button>
        </Link>
        <Link to ="/appcer">
          <button className="nav-btn">Approve Certificate</button>
        </Link>
      </div>

      <div id="side-nav">
        <span onClick={toggleNav}>&#9776;</span>
      </div>

      <div className="app-content">
        <div className="app-right">
          <div className="app-top">
            <select id="sem-select" className="dropdown" value={selectedSem} onChange={handleSelectChange}>
              <option value="">Select SEM</option>
              <option value="IV">IV</option>
              <option value="V">V</option>
              <option value="VI">VI</option>
            </select>
            <select id="oe" className="dropdown" value={selectedOe} onChange={handleSelectChange}>
              <option value="">Select OE</option>
              <option value="OET">OET</option>
              <option value="OEH">OEH</option>
              <option value="OEM">OEM</option>
              <option value="OEG">OEG</option>
            </select>
            <select id="category" className="dropdown" value={selectedCategory} onChange={handleSelectChange}>
              <option value="">Select Category</option>
              <option value="COURSERA">COURSERA</option>
              <option value="NPTEL">NPTEL</option>
              <option value="COLLEGE OFFERED">COLLEGE OFFERED</option>
            </select>
          </div>
          <div className="app-bottom">
            {[...Array(12)].map((_, index) => (
              <div className="app-box" key={index}>
                {index < 3 && (
                  <>
                    <p className="fbig">NAME OF STUDENT : JEET PATEL</p>
                    <p className="fbig">ROLL NUMBER : 16014223040</p>
                    <div className="fapp-btn">
                      <button className="app-view" onClick={() => openOverlay('view')}>
                        <img src={viewlogo} alt="view" />
                      </button>
                      <div className="fapp-choice">
                        <button className="approve" onClick={() => openOverlay('approve')}>
                          <img src={approveicon} alt="approve" />
                        </button>
                        <button className="app-reject" onClick={() => openOverlay('reject')}>
                          <img src={rejecticon} alt="reject" />
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {overlayType === 'view' && (
        <div className="overlay" id="view-overlay">
          <div className="view-content">
            <h2>Hours:</h2>
            <h2>Courses:</h2>
            <button className="close-overlay" onClick={closeOverlay}>Close</button>
          </div>
        </div>
      )}

      {overlayType === 'approve' && (
        <div className="overlay" id="approve-overlay">
          <div className="approve-content">
            <h2>Approval Message</h2>
            <p>Are you sure you want to approve?</p>
            <button className="ok-btn" onClick={closeOverlay}>OK</button>
            <button className="close-overlay" onClick={closeOverlay}>Cancel</button>
          </div>
        </div>
      )}

      {overlayType === 'reject' && (
        <div className="overlay" id="reject-overlay">
          <div className="reject-content">
            <h2>Reject Reason</h2>
            <div className="reject-reason">
              <p>Enter the Reason:</p>
              <input type="text" id="reject-reason" />
            </div>
            <button className="submit" onClick={() => {
              const reason = document.getElementById('reject-reason').value;
              console.log(`Rejected with reason: ${reason}`);
              closeOverlay();
            }}>Submit</button>
            <button className="close-overlay cancel" onClick={closeOverlay}>Cancel</button>
            <select className="overlay-dropdown">
              <option value="">Allowed for online Category</option>
              <option value="option1">Yes</option>
              <option value="option2">No</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default ApproveStudents;
