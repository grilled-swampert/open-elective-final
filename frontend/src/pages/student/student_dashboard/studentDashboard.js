// studentDashboard.js
import React, { useState, useEffect } from 'react';
import styles from './studentDashboard.module.css';
import CoursesSection from '../../../components/student_components/student_dashboard_components/coursesSection';
import AdminScrollText from '../../../components/student_components/student_dashboard_components/adminScrollText';
import MainBody from '../../../components/student_components/student_dashboard_components/mainBody';
import Header from '../../../components/header/Header';

function StudentDashboard() {
  const [showOverlay, setShowOverlay] = useState(false);
  const [currentSemester, setCurrentSemester] = useState('IV');
  const [filteredCourses, setFilteredCourses] = useState([]);

  const courses = {
    OET: {
      name: "OET Courses",
      semesters: {
        V: ["Course A", "Course B"],
        VI: ["Course C", "Course D"],
        VII: ["Course E", "Course F"]
      },
      type: "Technical Elective"
    },
    OEHM: {
      name: "OEHM Courses",
      semesters: {
        V: ["Course G", "Course H"],
        VI: ["Course I", "Course J"]
      },
      type: "Humanities and Management Elective"
    },
    OEG: {
      name: "OEG Courses",
      semesters: {
        IV: ["Course K", "Course L"]
      },
      type: "General Elective"
    }
  };

  const filterCoursesBySemester = (semester) => {
    return Object.entries(courses)
      .filter(([_, course]) => course.semesters[semester])
      .reduce((acc, [key, course]) => {
        acc[key] = course;
        return acc;
      }, {});
  };

  const handleSemesterClick = (semester) => {
    setCurrentSemester(semester);
    const filtered = filterCoursesBySemester(semester);
    setFilteredCourses(filtered);
  };

  useEffect(() => {
    const initialFilteredCourses = filterCoursesBySemester(currentSemester);
    setFilteredCourses(initialFilteredCourses);
  }, [currentSemester]);

  return (
    <div>
      <Header />
      <CoursesSection 
        showOverlay={showOverlay} 
        setShowOverlay={setShowOverlay} 
      />
      <hr />
      <AdminScrollText />
      <hr />
      <MainBody 
        semesters={['IV', 'V', 'VI', 'VII']}
        currentSemester={currentSemester}
        handleSemesterClick={handleSemesterClick}
        courses={filteredCourses}
      />
    </div>
  );
}

export default StudentDashboard;
