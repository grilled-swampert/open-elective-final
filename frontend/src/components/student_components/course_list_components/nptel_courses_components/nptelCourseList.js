import React from 'react';
import styles from './nptelCourseList.module.css';

export default function NptelCourseList({ filteredCourses, selectedCourse, handleCourseSelection }) {
    
    return (
        <div>
            <div className={styles.courseList}>
                <div className={styles.courseHeader}>
                    <div className={styles.nptelCourseName}>Course Name</div>
                    <div className={styles.instituteName}>Institute</div>
                    <div className={styles.courseDuration}>Duration</div>
                    <div className={styles.startDate}>Start Date</div>
                    <div className={styles.endDate}>End Date</div>
                    <div className={styles.examDate}>Exam Date</div>
                    <div className={styles.select}>Select</div>
                </div>
                <div id="course-rows-container">
                    {filteredCourses && filteredCourses.length > 0 ? (
                        filteredCourses.map((course) => (
                            <div className={styles.courseRow} key={course.name}>
                                <div className={styles.nptelCourseName}>{course.name}</div>
                                <div className={styles.instituteName}>{course.institute}</div>
                                <div className={styles.courseDuration}>{course.duration}</div>
                                <div className={styles.startDate}>{course.startDate}</div>
                                <div className={styles.endDate}>{course.endDate}</div>
                                <div className={styles.examDate}>{course.examDate}</div>
                                <div className={styles.select}>
                                    <input
                                        type="checkbox"
                                        className={styles.courseSelect}
                                        checked={selectedCourse?.name === course.name}
                                        onChange={() => handleCourseSelection(course)}
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        <div>No courses available</div>
                    )}
                </div>
            </div>

            <div className={styles.buttons}>
                <button className={styles.downloadBtn}>
                    <i className="fa-solid fa-file-arrow-down"></i>
                </button>
            </div>
        </div>
    );
}
