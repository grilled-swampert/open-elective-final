import React, { useState } from 'react';
import './student_add.css';
import Header from '../../../components/faculty_components/fac_landing_components/Header';
import Sidebar from '../../../components/faculty_components/add_student_component/Sidebar';
import StudentAdd from '../../../components/faculty_components/add_student_component/StudentAdd';

const AddStudents = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleNav = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="main">
      <Header />
      <Sidebar isOpen={sidebarOpen} />
      <div id="side-nav">
        <span onClick={toggleNav}>&#9776;</span>
      </div>
      <StudentAdd />
    </div>
  );
};

export default AddStudents;