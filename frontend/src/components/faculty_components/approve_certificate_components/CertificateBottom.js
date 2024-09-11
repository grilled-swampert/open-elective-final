import React from "react";
import './CertificateBottom.css';

export default function CertificateBottom({ students, setViewOverlayVisible, setApproveOverlayVisible, setRejectOverlayVisible, viewlogo, approveicon, rejecticon }) {
    return (
        <div className="bottom">
            {students.map((student, index) => (
                <div className="box" key={index}>
                    <p className="big">NAME OF STUDENT : {student.name}</p>
                    <p className="big">ROLL NUMBER : {student.rollNumber}</p>
                    <div className="cer-btn">
                        <button className="view" onClick={() => setViewOverlayVisible(true)}>
                            <img src={viewlogo} alt="view" className='view-img' />
                        </button>
                        <div className="choice">
                            <button className="approve" onClick={() => setApproveOverlayVisible(true)}>
                                <img src={approveicon} alt="approve" />
                            </button>
                            <button className="reject" onClick={() => setRejectOverlayVisible(true)}>
                                <img src={rejecticon} alt="reject" />
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}