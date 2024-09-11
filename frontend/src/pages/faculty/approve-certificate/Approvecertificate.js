import React, { useState } from 'react';
import './approve-certificate.css';
import viewlogo from '../photos-logos/view.jpeg';
import approveicon from '../photos-logos/approve.png';
import rejecticon from '../photos-logos/reject.jpeg';
import Sidebar from '../../../components/faculty_components/add_student_component/Sidebar';
import Topbar from '../../../components/faculty_components/approve_certificate_components/Topbar';
import CertificateBottom from '../../../components/faculty_components/approve_certificate_components/CertificateBottom';
import CertificateOverlay from '../../../components/faculty_components/approve_certificate_components/CertificateOverlay';
import Header from '../../../components/faculty_components/fac_landing_components/Header';
import PaginationButton from '../../../components/faculty_components/approve_certificate_components/PaginationButton';

const ApproveCertificates = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [viewOverlayVisible, setViewOverlayVisible] = useState(false);
  const [approveOverlayVisible, setApproveOverlayVisible] = useState(false);
  const [rejectOverlayVisible, setRejectOverlayVisible] = useState(false);
  const [rejectReason, setRejectReason] = useState('');

  const toggleNav = () => setSidebarOpen(!sidebarOpen);

  const students = [
    { name: 'JEET PATEL', rollNumber: '16014223040' },
    // Add more students as needed
  ];

  

  return (
    <div className="main">
      <Header />
      <Sidebar sidebarOpen={sidebarOpen} toggleNav={toggleNav} />
      <div className="cer-content">
        <div className="cer-right">
          <Topbar />
          <CertificateBottom 
              students={students}
              setViewOverlayVisible={setViewOverlayVisible}
              setApproveOverlayVisible={setApproveOverlayVisible}
              setRejectOverlayVisible={setRejectOverlayVisible}
              viewlogo={viewlogo}
              approveicon={approveicon}
              rejecticon={rejecticon}
          />
          <PaginationButton
            totalPages={10} // Replace with your actual total pages
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
      <CertificateOverlay 
        viewOverlayVisible={viewOverlayVisible}
        approveOverlayVisible={approveOverlayVisible}
        rejectOverlayVisible={rejectOverlayVisible}
        setViewOverlayVisible={setViewOverlayVisible}
        setApproveOverlayVisible={setApproveOverlayVisible}
        setRejectOverlayVisible={setRejectOverlayVisible}
        rejectReason={rejectReason}
        setRejectReason={setRejectReason}
      />
    </div>
  );
};

export default ApproveCertificates;