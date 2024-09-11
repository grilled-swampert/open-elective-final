import React, { useEffect } from 'react';
import './StudentAdd.css';
import UploadSection from './UploadSection';
import SemesterBoxes from './SemesterBoxes';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSemesters } from '../../../actions/terms';

const StudentAdd = () => {
  const { termId } = useParams();

  const dispatch = useDispatch();
  const termSemesters = useSelector((state) => state.semesters);
  console.log(termSemesters);

  useEffect(() => {
    dispatch(getSemesters(termId));
  }, [dispatch, termId]);

  return (
    <div className="add-content">
      <div className="add-right">
        <UploadSection />
        {
          termSemesters && termSemesters.map((semester) => (
            <SemesterBoxes semester={semester} key={semester._id} />
          ))
        }
      </div>
    </div>
  );
};

export default StudentAdd;