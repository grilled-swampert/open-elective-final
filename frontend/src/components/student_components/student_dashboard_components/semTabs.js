import React from "react";
import styles from "./semTabs.module.css";

export default function SemTabs({ semesters, currentSemester, handleSemesterClick, courses }) {
  return (
      <div>
          <div className={styles.semesterTabs}>
              {semesters.map((semester) => (
                  <div className={styles.semesterWrapper} key={semester}>
                      <button 
                          className={`${styles.semesterBtn} ${currentSemester === semester ? styles.active : ''}`}
                          data-semester={semester}
                          onClick={() => handleSemesterClick(semester)}
                      >
                          SEM {semester}
                      </button>
                      <span className={styles.academicYear}>2022-23</span>
                      <span className={styles.semesterType}>{semester === 'IV' || semester === 'VI' ? 'Even' : 'Odd'}</span>
                  </div>
              ))}
          </div>
      </div>
  );
}
