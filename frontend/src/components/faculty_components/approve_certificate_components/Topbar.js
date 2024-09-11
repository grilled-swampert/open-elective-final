import React from "react";
import './Topbar.css';

export default function Topbar(){
    return(
        <div className="cer-top">
            <select id="sem-select" className="dropdown">
              <option value="">Select SEM</option>
              <option value="option1">IV</option>
              <option value="option2">V</option>
              <option value="option3">VI</option>
            </select>
            <select id="oe" className="dropdown">
              <option value="">Select OE</option>
              <option value="OE">OET</option>
              <option value="OE">OEH</option>
              <option value="OE">OEM</option>
              <option value="OE">OEG</option>
            </select>
            <select id="category" className="dropdown">
              <option value="">Select Category</option>
              <option value="CATEGORY">COURSERA</option>
              <option value="CATEGORY">NPTEL</option>
              <option value="CATEGORY">COLLEGE OFFERED</option>
            </select>
          </div>
    )
}