import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './add-left-section.css';

const AddLeftSection = ({ rows, setRows }) => {
  const { termId } = useParams();
  const [semesterNumber, setSemesterNumber] = useState('');
  const [category, setCategory] = useState('');
  const [elective, setElective] = useState('');
  const [branch, setBranch] = useState('');
  const [syllabusFile, setSyllabusFile] = useState(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [certificateSubmissionDate, setCertificateSubmissionDate] = useState('');
  const [broadcastMessage, setBroadcastMessage] = useState('');
  const [error, setError] = useState(null);

  const handleAdd = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('semesterNumber', semesterNumber);
    formData.append('category', category);
    formData.append('elective', elective);
    formData.append('branch', branch);
    formData.append('syllabusFile', syllabusFile);
    formData.append('startDate', startDate);
    formData.append('endDate', endDate);
    formData.append('certificateSubmissionDate', certificateSubmissionDate); // Correct spelling
    formData.append('broadcastMessage', broadcastMessage);

    try {
        const response = await fetch(`/admin/${termId}/edit`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            setError(data.error || 'Something went wrong!');
        } else {
            setError(null);
            setSemesterNumber('');
            setCategory('');
            setElective('');
            setBranch('');
            setSyllabusFile(null);
            setStartDate('');
            setEndDate('');
            setCertificateSubmissionDate('');
            setBroadcastMessage('');
            console.log('Semester created', data);
        }
    } catch (err) {
        setError('Failed to submit the form');
        console.error('Error during form submission:', err);
    }
  };

  const handleFileChange = (e) => {
    setSyllabusFile(e.target.files[0]);
  };

  const handleDateChange = (setter) => (e) => {
    const date = e.target.value;
    setter((prev) => {
      const [prevDate, prevTime] = prev.split('T');
      return `${date}T${prevTime || '00:00:00.000Z'}`;
    });
  };

  const handleTimeChange = (setter) => (e) => {
    const time = e.target.value;
    setter((prev) => {
      const [prevDate] = prev.split('T');
      return `${prevDate || ''}T${time}:00.000Z`;
    });
  };

  return (
    <div className="left-section">
      <div>
        <select 
          id="sem" 
          className="dropdown"
          value={semesterNumber}
          onChange={(e) => setSemesterNumber(e.target.value)}
        >
          <option value="">Select SEM</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
          <option value="VII">VII</option>
        </select>
      </div>
      <div>
        <select 
          id="oe" 
          className="dropdown"
          value={elective}
          onChange={(e) => setElective(e.target.value)}
        >
          <option value="">Select OE</option>
          <option value="OET">OET</option>
          <option value="OEH">OEH</option>
          <option value="OEM">OEM</option>
          <option value="OEG">OEG</option>
        </select>
      </div>
      <div>
        <select 
          id="category" 
          className="dropdown"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          <option value="COURSERA">COURSERA</option>
          <option value="NPTEL">NPTEL</option>
          <option value="COLLEGE OFFERED">COLLEGE OFFERED</option>
        </select>
      </div>
      <div className="date-selection">
        <div className="startDate">
          <label>Start Date:</label>
          <input 
            type="date" 
            id="start-date" 
            className="date" 
            value={startDate.split('T')[0]}
            onChange={handleDateChange(setStartDate)}
          />
          <input 
            type="time" 
            id="start-time" 
            className="date" 
            value={startDate.split('T')[1]?.slice(0, 5) || ''}
            onChange={handleTimeChange(setStartDate)}
          />
        </div>

        <div className="endDate">
          <label>End Date:</label>
          <input 
            type="date" 
            id="end-date" 
            className="date" 
            value={endDate.split('T')[0]}
            onChange={handleDateChange(setEndDate)}
          />
          <input 
            type="time" 
            id="end-time" 
            className="date" 
            value={endDate.split('T')[1]?.slice(0, 5) || ''}
            onChange={handleTimeChange(setEndDate)}
          />
        </div>
      </div>
      <div className="cer-dead">
        <label>Certificate Deadline:</label>
        <input 
          type="date" 
          id="certificate-deadline" 
          className="date" 
          value={certificateSubmissionDate}
          onChange={(e) => setCertificateSubmissionDate(e.target.value)}
        />
      </div>

      <div id="upload-btn">
        <input 
          type="file" 
          name="UPLOAD" 
          accept=".csv" 
          onChange={handleFileChange}
        />
      </div>

      {error && <div className="error-message">{error}</div>}

      <button id="add-btn" onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default AddLeftSection;
