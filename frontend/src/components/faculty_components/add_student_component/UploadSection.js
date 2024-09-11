import React, { useState } from 'react';
import './UploadSection.css';
import { useParams } from 'react-router-dom';

const UploadSection = () => {
  const { termId } = useParams();
  const [selectedSem, setSelectedSem] = useState('');
  const [studentsList, setStudentsList] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedSem) {
      setError('Please select a semester');
      return;
    }

    if (!studentsList) {
      setError('Please upload a file');
      return;
    }

    const formData = new FormData();
    formData.append('semesterNumber', selectedSem);
    formData.append('studentsList', studentsList);

    try {
      const response = await fetch(`/faculty/branch/${termId}/edit/addStudents`, {
        method: 'PATCH',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Something went wrong!');
      } else {
        setError(null);
        setSelectedSem('');
        setStudentsList(null);
        console.log('Semester created', data);
      }
    } catch (err) {
      setError('Failed to submit the form');
    }
  };

  const handleFileUpload = (event) => {
    setStudentsList(event.target.files[0]);
    console.log('File selected:', event.target.files[0]);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="add-top">
        <select 
          id="add-sem-select" 
          value={selectedSem} 
          onChange={(e) => setSelectedSem(e.target.value)}
        >
          <option value="">Select SEM</option>
          <option value="IV">IV</option>
          <option value="V">V</option>
          <option value="VI">VI</option>
        </select>
        <div id="add-upload-btn">
          <input 
            type="file" 
            name="UPLOAD" 
            accept=".csv" 
            onChange={handleFileUpload} 
          />
        </div>
        <button id="submit" type="submit">SUBMIT</button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default UploadSection;
