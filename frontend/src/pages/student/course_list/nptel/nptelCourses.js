import React, { useState } from 'react';
import styles from './nptelCourses.module.css';
import KJSCELogo from '../../../../images/KJSCE-logo.png';
import NptelCourseHeader from '../../../../components/student_components/course_list_components/nptel_courses_components/nptelCourseHeader';
import NptelCourseList from '../../../../components/student_components/course_list_components/nptel_courses_components/nptelCourseList';
import NptelCourseAddedHeader from '../../../../components/student_components/course_list_components/nptel_courses_components/nptelCourseAddedHeader';
import NptelCourseAdded from '../../../../components/student_components/course_list_components/nptel_courses_components/nptelCourseAdded';
import Header from '../../../../components/header/Header';

function NptelCourses() {
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showOverlay, setShowOverlay] = useState(false);

  const handleCourseSelection = (course) => {
    setSelectedCourse(selectedCourse?.name === course.name ? null : course);
  };

  const courses = [
    {
      name: 'Introduction to Machine Learning',
      institute: 'IIT Madras',
      duration: '12 weeks',
      startDate: '01 Aug 2024',
      endDate: '23 Oct 2024',
      examDate: '30 Oct 2024',
    },
    {
      name: 'Data Structures and Algorithms',
      institute: 'IIT Bombay',
      duration: '8 weeks',
      startDate: '15 Sep 2024',
      endDate: '10 Nov 2024',
      examDate: '17 Nov 2024',
    },
    {
      name: 'Artificial Intelligence',
      institute: 'IIT Delhi',
      duration: '10 weeks',
      startDate: '01 Oct 2024',
      endDate: '10 Dec 2024',
      examDate: '17 Dec 2024',
    },
  ];

  const filteredCourses = courses.filter((course) =>
    course.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <Header />
      <div className={styles.heroSection}>
        <div className={styles.coursesSelectorList}>
          <NptelCourseHeader 
          searchTerm={searchTerm} 
          setSearchTerm={setSearchTerm} 
          />
          <NptelCourseList 
              filteredCourses={filteredCourses} 
              selectedCourse={selectedCourse} 
              handleCourseSelection={handleCourseSelection} 
          />

        </div>

        <div className={styles.coursesAdded}>
          <NptelCourseAddedHeader />
          <NptelCourseAdded 
              selectedCourse={selectedCourse} 
              setSelectedCourse={setSelectedCourse}
          />
        </div>
      </div>
    </div>
  );
}

export default NptelCourses;
