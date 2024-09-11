import React from "react";
import './CertificateOverlay.css';

export default function CertificateOverlay({
  viewOverlayVisible,
  approveOverlayVisible,
  rejectOverlayVisible,
  setViewOverlayVisible,
  setApproveOverlayVisible,
  setRejectOverlayVisible,
  rejectReason,
  setRejectReason
}) {
  return (
    <div>
      {viewOverlayVisible && (
        <div className="overlay">
          <img alt="Certificate" />
          <button onClick={() => setViewOverlayVisible(false)}>Close</button>
        </div>
      )}

      {approveOverlayVisible && (
        <div className="overlay">
          <h2>Approval Message</h2>
          <p>Are you sure you want to approve?</p>
          <button className="ok-btn" onClick={() => setApproveOverlayVisible(false)}>OK</button>
        </div>
      )}

      {rejectOverlayVisible && (
        <div className="overlay">
          <h2>Reject Reason</h2>
          <div className="reject-reason">
            <p>Enter the Reason:</p>
            <input type="text" id="reject-reason" value={rejectReason} onChange={(e) => setRejectReason(e.target.value)} />
          </div>
          <button className="submit" onClick={() => {
            setRejectOverlayVisible(false);
            console.log(`Rejected with reason: ${rejectReason}`);
          }}>Submit</button>
        </div>
      )}
    </div>
  );
}