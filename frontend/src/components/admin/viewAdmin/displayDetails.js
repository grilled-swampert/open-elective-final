import React from 'react';
import { useParams } from 'react-router-dom';
import download from '../photos-logos/download.png'; // Default import
import deleteIcon from '../photos-logos/delete.png'; // Default import

const SemesterDetails = ({ semester }) => {
  const { termId } = useParams();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this semester?')) {
      try {
        const response = await fetch(`/admin/${termId}/view/${semester._id}`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete semester');
        }

        if(response.ok) {
          window.location.reload();
          console.log('Semester deleted successfully');
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <tbody>
      <tr>
        <td>{semester.semesterNumber}</td>
        <td>{semester.elective}</td>
        <td>{semester.category}</td>
        <button>
          <img src={download} alt="Download" />
        </button>
        <td>{semester.startDate}</td>
        <td>{semester.endDate}</td>
        <button onClick={handleDelete}>
          <img src={deleteIcon} alt="Delete" />
        </button>
      </tr>
    </tbody>
  );
};

export default SemesterDetails;
