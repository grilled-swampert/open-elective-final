import React from "react";
import './ViewDashboard.css';

export default function ViewDashboard({ handleViewButtonClick, student }) {
    return (
              <div>
                <div className="student-info-grid-item" key={student.rollNumber}>
                  <h4 className="student-info-heading">Name of Student:</h4>
                  <p className="student-info">{student.name}</p>
                  <h4 className="student-info-heading">Email ID:</h4>
                  <p className="student-info">{student.email}</p>
                  <h4 className="student-info-heading">Status:</h4>
                  <p className="student-info">{student.status}</p>
                  <button className="faculty-view-viewBtn" onClick={() => handleViewButtonClick(student)}>
                    <i className="fa-regular fa-eye"></i>
                  </button>
                </div>
            </div>
    );
}