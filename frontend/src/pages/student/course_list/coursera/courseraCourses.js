import React, { useState, useEffect } from 'react';
import styles from './courseraCourses.module.css';
import KJSCELogo from '../../../../images/KJSCE-logo.png';
import { Link } from "react-router-dom";
import CourseraCourseHeader from '../../../../components/student_components/course_list_components/coursera_course_list_components/courseraCourseHeader';
import CourseraCourseList from '../../../../components/student_components/course_list_components/coursera_course_list_components/courseraCourseList';
import CourseraCourseAddedHeader from '../../../../components/student_components/course_list_components/coursera_course_list_components/courseraCourseAddedHeader';
import CourseraCourseAdded from '../../../../components/student_components/course_list_components/coursera_course_list_components/courseraCourseAdded';
import Header from '../../../../components/header/Header';

function CourseraCourses() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState([]);
  

  const courses = [
    { id: 1, name: 'Introduction to Data Science', university: 'University of California, San Diego', learningHours: 3, courseraHours: 2, courseId: 'DS101' },
    { id: 2, name: 'Machine Learning', university: 'Stanford University', learningHours: 3, courseraHours: 4, courseId: 'ML202' },
    { id: 3, name: 'Algorithms Specialization', university: 'Princeton University', learningHours: 4, courseraHours: 9, courseId: 'AL303' },
    { id: 4, name: 'Web Development Bootcamp', university: 'University of London', learningHours: 45, courseraHours: 45, courseId: 'WD404' },
    { id: 5, name: 'Artificial Intelligence', university: 'Columbia University', learningHours: 55, courseraHours: 55, courseId: 'AI505' }
  ];

  const handleCourseSelection = (course) => {
    setSelectedCourses(prevSelectedCourses => {
      if (prevSelectedCourses.find(c => c.id === course.id)) {
        return prevSelectedCourses.filter(c => c.id !== course.id);
      } else {
        return [...prevSelectedCourses, course];
      }
    });
  };


  const removeCourse = (courseId) => {
    setSelectedCourses(prevSelectedCourses => prevSelectedCourses.filter(course => course.id !== courseId));
  };

  return (
    <div>
      <Header />
      
      <div className={styles.heroSection}>
        <div className={styles.coursesSelectorList}>
          <CourseraCourseHeader />
          <CourseraCourseList 
          courses={courses} 
          selectedCourses={selectedCourses} 
          handleCourseSelection={handleCourseSelection} 
          />
        </div>

        <div className={styles.coursesAdded}>
            <CourseraCourseAddedHeader />
            <CourseraCourseAdded 
                selectedCourses={selectedCourses} 
                removeCourse={removeCourse} 
            />
        </div>

      </div>
    </div>
  );
}

export default CourseraCourses;