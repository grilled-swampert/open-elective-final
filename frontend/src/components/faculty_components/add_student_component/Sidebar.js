import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ isOpen }) => {
  const { termId } = useParams();
  return (
    <div id="sidebar" style={{ width: isOpen ? '250px' : '0' }}>
      <Link to={`/faculty/branch/${termId}/edit/addStudents`}>
        <button className="nav-btn">Add Student</button>
      </Link>
      <Link to={`/faculty/branch/${termId}/edit/approveCourses`}>
        <button className="nav-btn">Approve Student</button>
      </Link>
      <Link to={`/faculty/branch/${termId}/edit/approveCertificates`}>
        <button className="nav-btn">Approve Certificate</button>
      </Link>
    </div>
  );
};

export default Sidebar;