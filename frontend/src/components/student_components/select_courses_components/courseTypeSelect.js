import React from 'react';
import CourseraLogo from '../../../images/courses_images/coursera-logo-white-rgb.png';
import NptelLogo from '../../../images/courses_images/nptel-logo-4063791902.png';
import SomaiyaLogo from '../../../images/courses_images/engg-logo-2920848043.png';
import styles from './courseTypeSelect.module.css';

export default function CourseTypeSelect({ handleCourseClick }) {
    return(
        <div>
            <h1 className={styles.heading}>Select Course Category</h1>
            <div className={styles.coursesSection}>
                <div className={`${styles.courseName} ${styles.courseraContainer}`} onClick={() => handleCourseClick('/coursera-courses')}>
                    <img src={CourseraLogo} alt="Coursera Logo" className={styles.courseraLogo} />
                </div>
                <div className={`${styles.courseName} ${styles.nptelContainer}`} onClick={() => handleCourseClick('/nptel-courses')}>
                    <img src={NptelLogo} alt="NPTEL Logo" className={styles.nptelLogo} />
                </div>
                <div className={`${styles.courseName} ${styles.somaiyaContainer}`} onClick={() => handleCourseClick('/somaiya-courses')}>
                    <img src={SomaiyaLogo} alt="Somaiya Logo" className={styles.somaiyaLogo} />
                </div>
            </div>
        </div>
    )
}