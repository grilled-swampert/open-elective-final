import React from 'react';
import './SemInfo.css';

export default function SemInfo({ activeTab, tabNumbers, handleTabClick }) {
    return(
        <div className="sem-info">
          <div id="total" className={`side-tab ${activeTab === 'total' ? 'expanded' : ''}`} onClick={() => handleTabClick('total')}>
            <h2>Total</h2>
            <h1 className="number">{tabNumbers.total}</h1>
          </div>
          <div id="approved" className={`side-tab ${activeTab === 'approved' ? 'expanded' : ''}`} onClick={() => handleTabClick('approved')}>
            <h2>Approved</h2>
            <h1 className="number">{tabNumbers.approved}</h1>
          </div>
          <div id="rejected" className={`side-tab ${activeTab === 'rejected' ? 'expanded' : ''}`} onClick={() => handleTabClick('rejected')}>
            <h2>Rejected</h2>
            <h1 className="number">{tabNumbers.rejected}</h1>
          </div>
          <div id="not-submitted" className={`side-tab ${activeTab === 'not-submitted' ? 'expanded' : ''}`} onClick={() => handleTabClick('not-submitted')}>
            <h2>Not Submitted</h2>
            <h1 className="number">{tabNumbers.notSubmitted}</h1>
          </div>
        </div>
    )
}