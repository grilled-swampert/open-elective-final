import React, { useEffect } from 'react';
import TableRow from './TableRow';
import './Table.css';
import { useDispatch, useSelector } from 'react-redux';
import { getTerms } from '../../../actions/terms';

export default function Table () {
  const dispatch = useDispatch();
  const rows = useSelector((state) => state.terms);
  console.log(rows);
  
  useEffect(() => {
      dispatch(getTerms());
  }, [dispatch])

  console.log(rows);

  return (
    <div className="fac-content">
      <table id='fac-table'>
        <thead>
          <tr>
            <th>row</th>
            <th>SEM</th>
            <th>VIEW</th>
            <th>EDIT</th>
          </tr>
        </thead>
            { rows && rows.map((row) => (
                <TableRow row={row} key={row._id} />
            ))}
      </table>
    </div>
  );
};

