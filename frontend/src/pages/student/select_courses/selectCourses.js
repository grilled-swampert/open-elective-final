import React from 'react';
import styles from './selectCourses.module.css';
import { useNavigate } from "react-router-dom";
import CourseTypeSelect from '../../../components/student_components/select_courses_components/courseTypeSelect';
import Header from '../../../components/header/Header';

function SelectCourses() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear session data if necessary
    // Redirect to login page
    navigate('/login');
  };

  const handleCourseClick = (path) => {
    navigate(path);
  };

  return (
    <div>
      <Header />
      <CourseTypeSelect handleCourseClick={handleCourseClick} />
    </div>
  );
}

export default SelectCourses;