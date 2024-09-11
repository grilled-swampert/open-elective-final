import React from 'react';
import styles from './nptelCourseHeader.module.css';

export default function NptelCourseHeader({ searchTerm, setSearchTerm }) {
    return (
        <div>
            <h1>Select NPTEL Courses</h1>
          <hr />
          <h3>What course are you looking for?</h3>
          <input
            className={styles.searchInput}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
    )
}