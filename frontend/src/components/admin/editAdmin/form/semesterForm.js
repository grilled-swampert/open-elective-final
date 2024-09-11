import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './semesterForm.css';

export default function SemesterForm() {
    const { termId } = useParams(); // Extract termId from the URL
    const [semesterNumber, setSemesterNumber] = useState('');
    const [category, setCategory] = useState('');
    const [elective, setElective] = useState('');
    const [branch, setBranch] = useState('');
    const [syllabusFile, setSyllabusFile] = useState(null);
    const [studentsList, setStudentsList] = useState([]); // This isn't used in the controller, so consider removing if not needed.
    const [courses, setCourses] = useState([]); // Same as above, consider removing if unused.
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [certificateSubmissionDate, setCertificateSubmissionDate] = useState('');
    const [broadcastMessage, setBroadcastMessage] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('semesterNumber', semesterNumber);
        formData.append('category', category);
        formData.append('elective', elective);
        formData.append('branch', branch);
        formData.append('syllabusFile', syllabusFile); // Append the file
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);
        formData.append('certficateSubmissionDate', certificateSubmissionDate);
        formData.append('broadcastMessage', broadcastMessage);

        try {
            const response = await fetch(`/admin/${termId}/edit`, {
                method: 'POST',
                body: formData, // Use formData
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
                setStudentsList([]); // Optional cleanup
                setCourses([]); // Optional cleanup
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
        setSyllabusFile(e.target.files[0]); // Capture the selected file
    };

    return (
        <form onSubmit={handleSubmit}>
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
                            <option value="COURSERA">Coursera</option>
                            <option value="NPTEL">NPTEL</option>
                            <option value="COLLEGE OFFERED">College Offered</option>
                        </select>
                    </div>
                    <div className="date-selection">
                        <div className="startDate">
                            <label>Start Date:</label>
                            <input
                                type="date"
                                id="start-date"
                                className="date"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>

                        <div className="endDate">
                            <label>End Date:</label>
                            <input
                                type="date"                                id="end-date"
                                className="date"
                                value={endDate}
                                onChange={(e) => setEndDate(e.target.value)}
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

                    <button id="add-btn" type="submit">
                        ADD
                    </button>

                    {error && <div className="error">{error}</div>}
        </form>
    );
}
