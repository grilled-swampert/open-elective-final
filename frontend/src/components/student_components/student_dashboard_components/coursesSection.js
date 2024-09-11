import React from 'react';
import styles from './coursesSection.module.css';

export default function CoursesSection({ showOverlay, setShowOverlay }) {
    const toggleOverlay = () => {
        setShowOverlay(!showOverlay);
      };

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

    return(
        <div className={styles.coursesSection}>
        {Object.entries(courses).map(([key, course]) => (
          <div className={styles.courseTab} key={key}>
            <div className={styles.tabHeading}> 
              <h3>{course.name}</h3>
            </div>
            <p>{Object.keys(course.semesters).map(sem => `SEM ${sem}`).join(', ')}</p>
            <button className={styles.learnMore} onClick={toggleOverlay}>Click to Learn More</button>
          </div>
        ))}

        {showOverlay && (
                <div id="learn-more-overlay" className={styles.overlay} style={{display:'flex'}}>
                <div className={styles.overlayContent}>
                    <h2>Course Information</h2>
                    <div className={styles.courseDetails}>
                    <h3>OET Courses</h3>
                    <p>Technical Elective courses available in Semesters V, VI, and VII.</p>
                    <h4>Sample Courses:</h4>
                    <ul>
                        <li>Advanced Database Management</li>
                        <li>Machine Learning Applications</li>
                        <li>Internet of Things</li>
                    </ul>
                    </div>
                    <button id="close-overlay" onClick={toggleOverlay}>Close</button>
                </div>
                </div>
            )}
      </div>
    )
}