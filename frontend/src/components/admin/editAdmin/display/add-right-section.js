import React, { useState } from 'react';
import './add-right-section.css';
import downloadicon from "../../photos-logos/download.png";
import editicon from '../../photos-logos/edit.png';
import approveicon from '../../photos-logos/approve.png';
import rejecticon from '../../photos-logos/reject.jpeg';

const AddRightSection = ({ semester, index }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [startDate, setStartDate] = useState(semester.startDate);
    const [endDate, setEndDate] = useState(semester.endDate);

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleConfirm = () => {
        setIsEditing(false);
        // TODO: Add logic to save the changes, e.g., make an API call to update the semester.
        console.log(`Updated Semester ${index}:`, { startDate, endDate });
    };

    const handleCancel = () => {
        setIsEditing(false);
        setStartDate(semester.startDate); // Revert to the original date if canceled
        setEndDate(semester.endDate);
    };

    return (
        <tbody id="table-body">
            <tr>
                <td>{semester.semesterNumber}</td>
                <td>{semester.elective}</td>
                <td>{semester.category}</td>
                <td><button className="download-btn"><img src={downloadicon} alt="download" /></button></td>
                <td className="start-date">
                    {isEditing ? (
                        <input 
                            type="datetime-local" 
                            value={startDate?.replace(' ', 'T')} 
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    ) : (
                        startDate
                    )}
                </td>
                <td className="end-date">
                    {isEditing ? (
                        <input 
                            type="datetime-local" 
                            value={endDate?.replace(' ', 'T')} 
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    ) : (
                        endDate
                    )}
                </td>
                <td>{semester.certificateSubmissionDate}</td>
                <td className='ad-tick-cross'>
                    {isEditing ? (
                        <>
                            <button onClick={handleConfirm}><img src={approveicon} alt="approve" /></button>
                            <button onClick={handleCancel}><img src={rejecticon} alt="reject" /></button>
                        </>
                    ) : (
                        <button onClick={handleEdit}><img src={editicon} alt="edit" /></button>
                    )}
                </td>
            </tr>
        </tbody>
    );
}

export default AddRightSection;
