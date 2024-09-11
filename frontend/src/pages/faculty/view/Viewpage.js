import React, { useState, useEffect } from 'react';
import './view.css';
import Topbar from '../../../components/faculty_components/approve_certificate_components/Topbar';
import Header from '../../../components/faculty_components/fac_landing_components/Header';
import SemInfo from '../../../components/faculty_components/faculty_view_components/SemInfo';
import ViewDashboard from '../../../components/faculty_components/faculty_view_components/ViewDashboard';
import FacultyViewDownloadBtn from '../../../components/faculty_components/faculty_view_components/FacultyViewDownloadBtn';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getStudents } from '../../../actions/terms';

const ViewFaculty = () => {
  const { termId } = useParams();
  const dispatch = useDispatch();

  const termStudents = useSelector((state) => state.students);

  useEffect(() => {
    if (termId) {
      dispatch(getStudents(termId));
    } else {
      console.warn('Term ID is undefined or invalid');
    }
  }, [dispatch, termId]);

  const [activeTab, setActiveTab] = useState('total');
  const [tabNumbers, setTabNumbers] = useState({
    total: 0,
    approved: 0,
    rejected: 0,
    notSubmitted: 0,
  });
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState({
    downloadMenu: false,
    download1Menu: false,
    download2Menu: false,
    download3Menu: false,
  });

  useEffect(() => {
    if (Array.isArray(termStudents)) {
      const total = termStudents.length;
      const approved = termStudents.filter((student) => student.status?.toLowerCase() === 'approved').length;
      const rejected = termStudents.filter((student) => student.status?.toLowerCase() === 'rejected').length;
      const notSubmitted = termStudents.filter(
        (student) => !student.status || student.status.trim() === '' || student.status.toLowerCase() === 'not submitted'
      ).length;

      setTabNumbers({ total, approved, rejected, notSubmitted });
    } else {
      console.warn('termStudents is undefined when calculating tab numbers');
    }
  }, [termStudents]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleViewButtonClick = (student) => {
    setSelectedStudent(student);
    setOverlayVisible(true);
  };

  const closeOverlay = () => {
    setOverlayVisible(false);
    setSelectedStudent(null);
  };

  const toggleDropdown = (menu) => {
    setDropdownVisible((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const downloadTemplate = (template) => {
    setDropdownVisible({
      downloadMenu: false,
      download1Menu: false,
      download2Menu: false,
      download3Menu: false,
    });
  };

  const filteredStudentData = Array.isArray(termStudents)
    ? termStudents.filter((student) => {
        if (activeTab === 'approved') {
          return student.status?.toLowerCase() === 'approved';
        } else if (activeTab === 'rejected') {
          return student.status?.toLowerCase() === 'rejected';
        } else if (activeTab === 'notSubmitted') {
          return !student.status || student.status.trim() === '' || student.status.toLowerCase() === 'not submitted';
        } else {
          return true;
        }
      })
    : [];

  return (
    <div className="facultyView">
      <Header />
      <Topbar />
      <div className="hero-section">
        <SemInfo activeTab={activeTab} tabNumbers={tabNumbers} handleTabClick={handleTabClick} />
        <div className="view-dashboard">
          <div className="student-info-grid-container">

          {filteredStudentData.map((student) => (
            <ViewDashboard key={student.rollNumber} student={student} handleViewButtonClick={handleViewButtonClick} />
          ))}
          
          </div>        
        </div>
      </div>
      <FacultyViewDownloadBtn
        dropdownVisible={dropdownVisible}
        toggleDropdown={toggleDropdown}
        downloadTemplate={downloadTemplate}
      />
      {overlayVisible && selectedStudent && (
        <div className="overlay">
          <div className="overlay-content">
            <h2>Student Information</h2>
            <strong>Name of the student:</strong>
            <p>{selectedStudent.name}</p>
            <strong>Roll No.:</strong>
            <p>{selectedStudent.rollNumber}</p>
            <strong>Status:</strong>
            <p>{selectedStudent.status}</p>
            <strong>Branch:</strong>
            <p>{selectedStudent.branch}</p>
            <strong>Email:</strong>
            <p>{selectedStudent.email}</p>
            <button className="overlay-button" onClick={closeOverlay}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewFaculty;
