// mainBody.js
import React from "react";
import styles from "./mainBody.module.css";
import SemTabs from "./semTabs";
import CourseRow from "./courseRow";

export default function MainBody({ semesters, currentSemester, handleSemesterClick, courses }) {
    return (
        <div className={styles.mainBody}>
            <SemTabs 
                semesters={semesters} 
                currentSemester={currentSemester} 
                handleSemesterClick={handleSemesterClick} 
            />
            {Object.entries(courses).map(([key, course]) => (
                <CourseRow 
                    key={key}
                    title={course.name}
                    id={`${key}-row`}
                    deadline="DD-MM-YYYY"
                    courseType={course.type}
                    availableCourses={course.semesters[currentSemester] || []}
                />
            ))}
        </div>
    );
}
