import React, { useState } from 'react';
import styles from './courseRow.module.css';
import { Link } from 'react-router-dom';

export default function CourseRow({ id, title, deadline, courseType, availableCourses }) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selectedFile, setSelectedFile] = useState(null);

    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);
            console.log('File selected:', file.name);
        }
    };

    const handleCertificateSubmit = () => {
        if (selectedFile) {
            console.log('Uploading file:', selectedFile.name);
            setSelectedFile(null);
        } else {
            alert('Please select a file first');
        }
    };

    return (
        <div className={`${styles.coursesRow} ${isCollapsed ? styles.collapsed : ''}`} id={id}>
            <div className={styles.rowHeading}>
                <h3 className={styles.courseHeading}>{title}</h3>
                <div className={`${styles.iconContainer} ${styles.iconSpacing}`}>
                    <div className={styles.deadlineWrapper}>
                        <strong id="deadline-text">{deadline}</strong><br />
                        <span>Deadline</span>
                    </div>
                    <div className={`${styles.iconWrapper} ${styles.courseSelection}`}>
                        <span>Course Selection</span>
                        <i className="fas fa-clock" id="course-selection-icon"></i>
                        <span id="course-selection-status">Pending</span>
                    </div>
                    <div className={`${styles.iconWrapper} ${styles.certification}`}>
                        <span>Certification</span>
                        <i className="fas fa-clock" id="certification-icon"></i>
                        <span id="certification-status">Pending</span>
                    </div>
                </div>
                <button className={styles.tabCollapse} onClick={toggleCollapse}>
                    <i className={`fa-solid fa-angle-${isCollapsed ? 'down' : 'up'}`}></i>
                </button>
            </div>
            <div className={styles.collapsibleContent} style={{display: isCollapsed ? 'none' : 'block'}}>
                <hr />
                <div className={styles.contentWrapper}>
                    <div className={styles.courseInfo}>
                        <div className={styles.courseTypeSection}>
                            <strong>COURSE TYPE:</strong>
                            <ul className={styles.courseList}>
                                <li>{courseType}</li>
                            </ul>
                        </div>
                        <div className={styles.courseChosenSection}>
                            <strong>COURSE CHOSEN:</strong>
                            <ul className={styles.courseList}>
                                {availableCourses.map((course, index) => (
                                    <li key={index}>{course}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className={styles.actionButtons}>
                        <Link to="/student/66bf1dbb7e8a364c5b73ca72/select-courses">
                            <button className={styles.completeApplicationBtn}>COMPLETE APPLICATION</button>
                        </Link>
                        <div className={styles.uploadCertificateContainer}>
                            <input
                                type="file"
                                id={`upload-certificate-${id}`}
                                className={styles.uploadCertificate}
                                style={{display: 'none'}}
                                onChange={handleFileUpload}
                            />
                            <button
                                type="button"
                                id="select-file-btn"
                                className={`${styles.certificateBtn} ${styles.selectFileBtn}`}
                                onClick={() => document.getElementById(`upload-certificate-${id}`).click()}
                            >
                                <i className="fas fa-file-upload"></i>
                            </button>
                            <button
                                type="button"
                                id="submit-certificate-btn"
                                className={`${styles.certificateBtn} ${styles.submitCertificateBtn}`}
                                onClick={handleCertificateSubmit}
                            >
                                <i className="fas fa-upload"></i> UPLOAD CERTIFICATE
                            </button>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    );
}
