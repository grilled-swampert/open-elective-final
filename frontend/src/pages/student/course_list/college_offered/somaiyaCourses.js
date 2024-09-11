// somaiyaCourses.js
import React, { useState } from 'react';
import styles from './somaiyaCourses.module.css';
import KJSCELogo from '../../../../images/KJSCE-logo.png';
import SomaiyaSelectCourseHeader from '../../../../components/student_components/course_list_components/college_offered_courses_components/somaiyaSelectCourseHeader';
import SomaiyaCourseList from '../../../../components/student_components/course_list_components/college_offered_courses_components/somaiyaCourseList';
import SomaiyaCourseAddedHeading from '../../../../components/student_components/course_list_components/college_offered_courses_components/somaiyaCourseAddedHeading';
import SomaiyaCourseAdded from '../../../../components/student_components/course_list_components/college_offered_courses_components/somaiyaCourseAdded';
import Header from '../../../../components/header/Header';

// Updated data structure with faculty names
const dummyCourses = [
  { id: '1', name: 'Introduction to Programming', faculty: 'Dr. John Doe', dept: 'COMPS' },
  { id: '2', name: 'Database Management Systems', faculty: 'Dr. Jane Smith', dept: 'COMPS' },
  { id: '3', name: 'Artificial Intelligence Fundamentals', faculty: 'Dr. Emily Davis', dept: 'COMPS' },
  { id: '4', name: 'Computer Networks', faculty: 'Dr. Michael Johnson', dept: 'COMPS' },
  { id: '5', name: 'Machine Learning', faculty: 'Dr. Sarah Lee', dept: 'COMPS' },
  { id: '6', name: 'Software Engineering', faculty: 'Dr. Mark Brown', dept: 'COMPS' },
  { id: '7', name: 'Computer Graphics', faculty: 'Dr. Anna White', dept: 'COMPS' },
  { id: '8', name: 'Operating Systems', faculty: 'Dr. Robert King', dept: 'COMPS' },
  { id: '9', name: 'Data Science and Analytics', faculty: 'Dr. Lisa Scott', dept: 'COMPS' },
  { id: '10', name: 'Web Development', faculty: 'Dr. David Wilson', dept: 'IT' },
];

function SelectCourses() {
  const [selectedCourses, setSelectedCourses] = useState([]);

  const handleCourseSelection = (event, course) => {
    const checkbox = event.target;
    if (checkbox.checked) {
      if (selectedCourses.length < 4) {
        setSelectedCourses(prevCourses => [...prevCourses, course]);
      } else {
        checkbox.checked = false;
        alert('You can only select up to 4 courses.');
      }
    } else {
      setSelectedCourses(prevCourses => prevCourses.filter(c => c.id !== course.id));
    }
  };

  const handleRemoveCourse = (courseId) => {
    setSelectedCourses(prevCourses => prevCourses.filter(course => course.id !== courseId));
  };

  return (
    <div>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.coursesSelectorList}>
          <SomaiyaSelectCourseHeader />
          <SomaiyaCourseList 
            courses={dummyCourses} 
            selectedCourses={selectedCourses} 
            handleCourseSelection={handleCourseSelection} 
          />
        </div>
        <div className={styles.coursesAdded}>
          <SomaiyaCourseAddedHeading />
          <SomaiyaCourseAdded
            selectedCourses={selectedCourses}
            handleRemoveCourse={handleRemoveCourse}
            setSelectedCourses={setSelectedCourses}
          />
        </div>
      </div>
    </div>
  );
}

export default SelectCourses;
