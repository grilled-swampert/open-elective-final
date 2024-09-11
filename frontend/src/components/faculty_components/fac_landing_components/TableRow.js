import React from 'react';
import { Link } from 'react-router-dom';
import viewicon from '../../../pages/faculty/photos-logos/view.jpeg';
import editicon from '../../../pages/faculty/photos-logos/edit.png';
import './TableRow.css';

const TableRow = ({ row }) => {
  return (
    <tbody>
      <tr>
        <td>{row.termYear}</td>
        <td>{row.termType}</td>
        <td>
          <button>
            <Link to={`/faculty/branch/${row._id}/view`}>
              <img src={viewicon} alt="view-logo" />
            </Link>
          </button>
        </td>
        <td>
          <button>
            <Link to={`/faculty/branch/${row._id}/edit/addStudents`}>
              <img src={editicon} alt="edit-logo" />
            </Link>
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableRow;
