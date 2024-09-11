import React from 'react';
import './SemesterBoxes.css';

const SemesterBoxes = ({ semester }) => {
  return (
    <div className="add-bottom">
      <div className="add-box">
        <p>SEMESTER: {semester.semesterNumber}</p>
        <div id='csv-file'>CSV: {semester.students}</div>
      </div>
    </div>
  );
};

export default SemesterBoxes;
