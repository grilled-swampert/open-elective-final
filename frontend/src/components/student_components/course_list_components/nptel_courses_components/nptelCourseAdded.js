import React from 'react';
import styles from './nptelCourseAdded.module.css';
import { Link } from 'react-router-dom';

export default function NptelCourseAdded({ selectedCourse, setSelectedCourse }) {

    return(
        <div>
            <div className={styles.coursesAddedTable}>
            <div className={styles.coursesAddedContent}>
              {selectedCourse && (
                <div className={styles.coursesAddedRow}>
                  <h2 className={styles.nptelCourseName}>{selectedCourse.name}</h2>
                  <h3 className={styles.instituteName}>{selectedCourse.institute}</h3>
                  <button className={styles.removeCourse} onClick={() => setSelectedCourse(null)}>
                    Remove
                  </button>
                </div>
              )}
            </div>
          </div>
          <div className={styles.buttons}>
            <Link to="/student-dashboard">
              <button className={styles.submitBtn}>Submit</button>
            </Link>
          </div>
        </div>
    )
}