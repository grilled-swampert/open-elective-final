/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './termDetails.css';
import Edit from '../../photos-logos/edit.png';
import View from '../../photos-logos/view.jpeg';
import Delete from '../../photos-logos/delete.png';
import { Link, useParams } from 'react-router-dom';

const TermDetails = ({ term }) => {
  const { termId } = useParams();

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this term?')) {
      try {
        const response = await fetch(`/admin/${ term._id }`, {
          method: 'DELETE',
        });
        
        if (!response.ok) {
          throw new Error('Failed to delete term');
        }

        window.location.reload();
        console.log('Term deleted successfully');
        
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <tbody>
      <tr>
        <td>{term.termYear}</td>
        <td>{term.termType}</td>
        <td id="view-box">
          <button className="view-button">
            <Link to={`/admin/${term._id}/view`}>
              <img src={View} alt="View details" />
            </Link>
          </button>
          <button className="edit-button">
            <Link to={`/admin/${term._id}/edit/addCourses`}>
              <img src={Edit} alt="Edit courses" />
            </Link>
          </button>
          <button className="delete-button" onClick={handleDelete}>
            <img src={Delete} alt="Delete semester" />
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TermDetails;
